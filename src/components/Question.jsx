import { useState } from 'react';
import './Question.css';

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

  const handleOptionClick = (index) => {
    if (showAnswer) return;

    if (question.multipleCorrect) {
      // Toggle selection for multiple choice
      let newSelected;
      if (selectedAnswers.includes(index)) {
        newSelected = selectedAnswers.filter(i => i !== index);
      } else {
        newSelected = [...selectedAnswers, index];
      }
      setSelectedAnswers(newSelected);
    } else {
      // Single selection
      setSelectedAnswers([index]);
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
        <h2>{question.question}</h2>
        
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
          {question.options.map((option, index) => {
            const isSelected = showAnswer 
              ? (userAnswer || []).includes(index)
              : selectedAnswers.includes(index);
            const isCorrect = question.correctAnswer.includes(index);
            
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
                key={index}
                className={className}
                onClick={() => handleOptionClick(index)}
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
                    {String.fromCharCode(65 + index)}.
                  </span>
                )}
                <span className="option-text">{option}</span>
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
                {question.correctAnswer.map(idx => String.fromCharCode(65 + idx)).join(', ')}
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

