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
        
        {question.code && (
          <pre className="code-block">
            <code>{question.code}</code>
          </pre>
        )}

        <div className="options">
          {question.options.map((option, index) => {
            const isSelected = userAnswer === index;
            const isCorrect = index === question.correctAnswer;
            
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
                onClick={() => !showAnswer && onAnswerSelect(index)}
                disabled={showAnswer}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span className="option-text">{option}</span>
              </button>
            );
          })}
        </div>

        {showAnswer && (
          <div className="answer-feedback">
            <div className={`feedback-message ${userAnswer === question.correctAnswer ? 'success' : 'error'}`}>
              {userAnswer === question.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
            </div>
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

