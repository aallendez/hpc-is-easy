import './Results.css';

function Results({ questions, userAnswers, onReset }) {
  const correctCount = userAnswers.filter(a => a.isCorrect).length;
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
                    Your answer: {String.fromCharCode(65 + userAnswer.answer)}. {question.options[userAnswer.answer]}
                  </div>
                  {!isCorrect && (
                    <div className="answer-correct">
                      Correct answer: {String.fromCharCode(65 + question.correctAnswer)}. {question.options[question.correctAnswer]}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button className="retry-button" onClick={onReset}>
          Take Another Quiz
        </button>
      </div>
    </div>
  );
}

export default Results;

