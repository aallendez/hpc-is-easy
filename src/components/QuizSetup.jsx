import { useState } from 'react';
import './QuizSetup.css';

function QuizSetup({ onStart, totalQuestions }) {
  const [numQuestions, setNumQuestions] = useState(5);
  const [moduleFilter, setModuleFilter] = useState('all');

  const handleStart = () => {
    onStart(numQuestions, moduleFilter);
  };

  return (
    <div className="quiz-setup">
      <div className="setup-card">
        <h2>Setup Your Quiz</h2>
        
        <div className="setup-option">
          <label htmlFor="num-questions">
            Number of Questions:
          </label>
          <input
            id="num-questions"
            type="number"
            min="1"
            max={totalQuestions}
            value={numQuestions}
            onChange={(e) => setNumQuestions(parseInt(e.target.value))}
          />
        </div>

        <div className="setup-option">
          <label htmlFor="module-filter">
            Filter by Module:
          </label>
          <select
            id="module-filter"
            value={moduleFilter}
            onChange={(e) => setModuleFilter(e.target.value)}
          >
            <option value="all">All Modules</option>
            <option value="1">Module 1</option>
            <option value="2">Module 2</option>
            <option value="3">Module 3</option>
            <option value="4">Module 4</option>
            <option value="5">Module 5</option>
          </select>
        </div>

        <button className="start-button" onClick={handleStart}>
          Start Quiz
        </button>

        <div className="info">
          <p>Total questions available: {totalQuestions}</p>
        </div>
      </div>
    </div>
  );
}

export default QuizSetup;

