import { useState, useEffect } from 'react';
import './QuizSetup.css';

function QuizSetup({ onStart, totalQuestions, allQuestions }) {
  const [numQuestions, setNumQuestions] = useState(5);
  const [selectedModules, setSelectedModules] = useState([1, 2, 3, 4, 5]);
  const [availableQuestions, setAvailableQuestions] = useState(totalQuestions);

  useEffect(() => {
    // Calculate available questions based on selected modules
    const filtered = allQuestions.filter(q => selectedModules.includes(q.module));
    setAvailableQuestions(filtered.length);
  }, [selectedModules, allQuestions]);

  const handleModuleToggle = (module) => {
    if (selectedModules.includes(module)) {
      // Remove module if already selected
      setSelectedModules(selectedModules.filter(m => m !== module));
    } else {
      // Add module if not selected
      setSelectedModules([...selectedModules, module].sort());
    }
  };

  const toggleAllModules = () => {
    if (selectedModules.length === 5) {
      // Deselect all
      setSelectedModules([]);
    } else {
      // Select all
      setSelectedModules([1, 2, 3, 4, 5]);
    }
  };

  const handleStart = () => {
    if (selectedModules.length === 0) {
      alert('Please select at least one module');
      return;
    }
    onStart(numQuestions, selectedModules);
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
          <label>
            Select Modules:
          </label>
          
          <div className="module-checkboxes">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedModules.length === 5}
                onChange={toggleAllModules}
              />
              <span>All Modules</span>
            </label>
            
            {[1, 2, 3, 4, 5].map(module => (
              <label key={module} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedModules.includes(module)}
                  onChange={() => handleModuleToggle(module)}
                />
                <span>Module {module}</span>
              </label>
            ))}
          </div>
        </div>

        <button className="start-button" onClick={handleStart}>
          Start Quiz
        </button>

        <div className="info">
          <p>Questions available for selected modules: <strong>{availableQuestions}</strong></p>
          {numQuestions > availableQuestions && (
            <p className="warning-text">
              ⚠️ Only {availableQuestions} questions available. Quiz will include all of them.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizSetup;

