import { useState, useMemo } from 'react';
import './Question.css';

// Fisher-Yates shuffle
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function Question({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswerSelect, 
  showAnswer, 
  userAnswer,
  onNext 
}) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  
  // Create a stable shuffled order for this question's options
  // shuffledIndices[i] = original index of the option now at position i
  const shuffledIndices = useMemo(() => {
    const indices = question.options.map((_, i) => i);
    return shuffleArray(indices);
  }, [question.id]);
  
  // Map from original index to shuffled position
  const originalToShuffled = useMemo(() => {
    const map = {};
    shuffledIndices.forEach((originalIdx, shuffledPos) => {
      map[originalIdx] = shuffledPos;
    });
    return map;
  }, [shuffledIndices]);

  // Parse question text to handle inline code (text between backticks)
  const parseInlineCode = (text) => {
    const parts = text.split(/(`[^`]+`)/g);
    return parts.map((part, index) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        // Remove backticks and render as code
        return <code key={index} className="inline-code">{part.slice(1, -1)}</code>;
      }
      return part;
    });
  };

  // handleOptionClick receives the ORIGINAL index
  const handleOptionClick = (originalIndex) => {
    if (showAnswer) return;

    if (question.multipleCorrect) {
      // Toggle selection for multiple choice
      let newSelected;
      if (selectedAnswers.includes(originalIndex)) {
        newSelected = selectedAnswers.filter(i => i !== originalIndex);
      } else {
        newSelected = [...selectedAnswers, originalIndex];
      }
      setSelectedAnswers(newSelected);
    } else {
      // Single selection
      setSelectedAnswers([originalIndex]);
    }
  };

  const handleSubmit = () => {
    onAnswerSelect(selectedAnswers);
  };

  // Check if answers are correct
  const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    const sorted1 = [...arr1].sort((a, b) => a - b);
    const sorted2 = [...arr2].sort((a, b) => a - b);
    return sorted1.every((val, idx) => val === sorted2[idx]);
  };

  const isCorrectAnswer = showAnswer && arraysEqual(userAnswer || [], question.correctAnswer);

  return (
    <div className="question-container">
      <div className="question-header">
        <span className="question-counter">
          Question {questionNumber} of {totalQuestions}
        </span>
        <span className="module-badge">Module {question.module}</span>
      </div>

      <div className="question-content">
        <h2>{parseInlineCode(question.question)}</h2>
        
        {question.multipleCorrect && !showAnswer && (
          <p className="instruction-text">Select all that apply</p>
        )}
        
        {question.image && (
          <div className="question-image">
            <img src={question.image} alt="Question diagram" />
          </div>
        )}
        
        {question.code && (
          <pre className="code-block">
            <code>{question.code}</code>
          </pre>
        )}

        <div className="options">
          {shuffledIndices.map((originalIndex, displayIndex) => {
            const option = question.options[originalIndex];
            const isSelected = showAnswer 
              ? (userAnswer || []).includes(originalIndex)
              : selectedAnswers.includes(originalIndex);
            const isCorrect = question.correctAnswer.includes(originalIndex);
            
            let className = 'option';
            if (showAnswer) {
              if (isCorrect) {
                className += ' correct';
              } else if (isSelected && !isCorrect) {
                className += ' incorrect';
              }
            } else if (isSelected) {
              className += ' selected';
            }

            return (
              <button
                key={originalIndex}
                className={className}
                onClick={() => handleOptionClick(originalIndex)}
                disabled={showAnswer}
              >
                {question.multipleCorrect && !showAnswer ? (
                  <span className="option-checkbox">
                    <input 
                      type="checkbox" 
                      checked={isSelected}
                      readOnly
                    />
                  </span>
                ) : (
                  <span className="option-letter">
                    {String.fromCharCode(65 + displayIndex)}.
                  </span>
                )}
                <span className="option-text">{parseInlineCode(option)}</span>
                {showAnswer && isCorrect && <span className="check-mark">✓</span>}
              </button>
            );
          })}
        </div>

        {!showAnswer && selectedAnswers.length > 0 && (
          <button className="submit-button" onClick={handleSubmit}>
            Submit Answer
          </button>
        )}

        {showAnswer && (
          <div className="answer-feedback">
            <div className={`feedback-message ${isCorrectAnswer ? 'success' : 'error'}`}>
              {isCorrectAnswer ? '✓ Correct!' : '✗ Incorrect'}
            </div>
            {!isCorrectAnswer && (
              <div className="correct-answer-display">
                <strong>Correct answer{question.correctAnswer.length > 1 ? 's' : ''}:</strong>{' '}
                {question.correctAnswer
                  .map(originalIdx => String.fromCharCode(65 + originalToShuffled[originalIdx]))
                  .sort()
                  .join(', ')}
              </div>
            )}
            <button className="next-button" onClick={onNext}>
              {questionNumber === totalQuestions ? 'View Results' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Question;

