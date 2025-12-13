import './Results.css';

function Results({ questions, userAnswers, onReset, onRetryWrong }) {
  const correctCount = userAnswers.filter(a => a.isCorrect).length;
  const incorrectCount = userAnswers.filter(a => !a.isCorrect).length;
  const totalCount = questions.length;
  const percentage = ((correctCount / totalCount) * 100).toFixed(1);

  const getGradeColor = (percent) => {
    if (percent >= 80) return '#22c55e';
    if (percent >= 60) return '#eab308';
    return '#ef4444';
  };

  return (
    <div className="results-container">
      <div className="results-card">
        <h2>Quiz Complete! 🎉</h2>
        
        <div className="score-display" style={{ borderColor: getGradeColor(percentage) }}>
          <div className="score-percentage" style={{ color: getGradeColor(percentage) }}>
            {percentage}%
          </div>
          <div className="score-fraction">
            {correctCount} out of {totalCount} correct
          </div>
        </div>

        <div className="results-actions">
          {incorrectCount > 0 && (
            <button className="retry-wrong-button" onClick={onRetryWrong}>
              Retry Wrong Questions ({incorrectCount})
            </button>
          )}
          <button className="retry-button" onClick={onReset}>
            Take Another Quiz
          </button>
        </div>

        <div className="results-breakdown">
          <h3>Question Breakdown</h3>
          {questions.map((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer.isCorrect;

            return (
              <div key={question.id} className="result-item">
                <div className="result-header">
                  <span className={`result-icon ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? '✓' : '✗'}
                  </span>
                  <span className="result-title">
                    Question {index + 1} - Module {question.module}
                  </span>
                </div>
                <div className="result-question">{question.question}</div>
                <div className="result-answers">
                  <div className={isCorrect ? 'answer-correct' : 'answer-incorrect'}>
                    Your answer{userAnswer.answer.length > 1 ? 's' : ''}: {
                      userAnswer.answer
                        .map(idx => question.options[idx])
                        .join(' | ')
                    }
                  </div>
                  {!isCorrect && (
                    <div className="answer-correct">
                      Correct answer{question.correctAnswer.length > 1 ? 's' : ''}: {
                        question.correctAnswer
                          .map(idx => question.options[idx])
                          .join(' | ')
                      }
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Results;

