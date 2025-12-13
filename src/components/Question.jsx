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

// Detect if a line looks like code
function looksLikeCode(line) {
  const codePatterns = [
    /^\s*\d+\s*[\|\:]?\s*(if|for|while|def|class|import|from|return|#include|#pragma|#define|void|int|float|double|char|public|private|protected|static|const)\b/i,
    /^\s*\d+\s*[\|\:]?\s*[{}();]/,
    /^\s*(if|for|while|def|class|import|from|return|#include|#pragma|#define|void|int|float|double|char|public|private|protected|static|const)\s*[\(\{]/i,
    /^\s*[{}]\s*$/,
    /^\s*\}\s*(else|catch|finally)/i,
    /[{}();]\s*$/,
    /^\s*#(include|pragma|define|ifdef|ifndef|endif)/,
    /^\s*(public|private|protected)\s*(static)?\s*(class|void|int|String)/,
    /^\s*@(Override|Test|Autowired|Component)/,
    /^\s*(import|from)\s+[\w.]+/,
    /^\s*\d+\s*[\|\:]?\s*\w+\s*[=<>!]+/,
    /^\s*\d+\s*[\|\:]?\s*[\w.]+\s*\(/,
    /<<<.*>>>/,
    /^\s*model\s*=\s*/,
    /^\s*optimizer\s*=/,
    /^\s*(with|try|except|finally)\s*:/,
    /^\s*def\s+\w+\s*\(/,
    /^\s*class\s+\w+/,
    /\.cuda\(|\.backward\(|\.step\(/,
    /torch\.|tf\.|np\.|plt\./,
    /^\s*>>>/, // Python REPL
    /^\s*\$\s/, // Shell prompt
    /^\s*>\s+\w+/, // Command line
  ];
  
  return codePatterns.some(pattern => pattern.test(line));
}

// Check if text contains embedded code that should be extracted
function containsEmbeddedCode(text) {
  if (!text.includes('\n')) return false;
  
  const lines = text.split('\n');
  let codeLineCount = 0;
  
  for (const line of lines) {
    if (looksLikeCode(line)) {
      codeLineCount++;
    }
  }
  
  // If we have at least 2 code-like lines, it's likely embedded code
  return codeLineCount >= 2;
}

// Parse text into segments of regular text and code blocks
function parseTextWithCode(text) {
  if (!containsEmbeddedCode(text)) {
    return [{ type: 'text', content: text }];
  }
  
  const lines = text.split('\n');
  const segments = [];
  let currentSegment = { type: 'text', lines: [] };
  let inCodeBlock = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isCodeLine = looksLikeCode(line);
    const nextLine = lines[i + 1];
    const prevLine = lines[i - 1];
    
    // Check context - if surrounded by code lines, treat as code
    const nextIsCode = nextLine && looksLikeCode(nextLine);
    const prevIsCode = prevLine && looksLikeCode(prevLine);
    const isContextualCode = (isCodeLine || (inCodeBlock && (nextIsCode || line.trim() === '')));
    
    if (isCodeLine && !inCodeBlock) {
      // Starting a code block
      if (currentSegment.lines.length > 0) {
        segments.push({ type: 'text', content: currentSegment.lines.join('\n') });
      }
      currentSegment = { type: 'code', lines: [line] };
      inCodeBlock = true;
    } else if (inCodeBlock) {
      // Continue or end code block
      if (isCodeLine || line.trim() === '' || (prevIsCode && nextIsCode)) {
        currentSegment.lines.push(line);
      } else {
        // End of code block
        segments.push({ type: 'code', content: currentSegment.lines.join('\n') });
        currentSegment = { type: 'text', lines: [line] };
        inCodeBlock = false;
      }
    } else {
      // Regular text
      currentSegment.lines.push(line);
    }
  }
  
  // Push the last segment
  if (currentSegment.lines.length > 0) {
    segments.push({ 
      type: currentSegment.type, 
      content: currentSegment.lines.join('\n') 
    });
  }
  
  return segments;
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

  // Render text that may contain embedded code blocks
  const renderTextWithCode = (text) => {
    const segments = parseTextWithCode(text);
    
    return segments.map((segment, index) => {
      if (segment.type === 'code') {
        return (
          <pre key={index} className="code-block embedded-code">
            <code>{segment.content}</code>
          </pre>
        );
      } else {
        // For text segments, also handle inline code with backticks
        const textContent = segment.content.trim();
        if (!textContent) return null;
        return (
          <span key={index} className="text-segment">
            {parseInlineCode(textContent)}
          </span>
        );
      }
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
        <div className="question-text">
          {renderTextWithCode(question.question)}
        </div>
        
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
                <span className="option-text">{renderTextWithCode(option)}</span>
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

