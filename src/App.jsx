import { useState, useEffect } from 'react';
import { questions } from './data/questions';
import QuizSetup from './components/QuizSetup';
import Question from './components/Question';
import Results from './components/Results';
import './App.css';
import { Analytics } from "@vercel/analytics/react"

// Fisher-Yates shuffle algorithm for true randomness
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
  const [quizState, setQuizState] = useState('setup'); // setup, quiz, results
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode from localStorage
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  // All questions already combined in data/questions.js
  const allQuestions = questions;

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Save to localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const startQuiz = (numQuestions, selectedModules, randomOrder = true, answerTypeFilter = 'all') => {
    
    // Filter questions by selected modules
    let filtered = allQuestions.filter(q => selectedModules.includes(q.module));

    // Apply answer type filter
    if (answerTypeFilter === 'single') {
      filtered = filtered.filter(q => !q.multipleCorrect);
    } else if (answerTypeFilter === 'multiple') {
      filtered = filtered.filter(q => q.multipleCorrect);
    }

    // Apply random order if selected
    let orderedQuestions;
    if (randomOrder) {
      // Shuffle questions using Fisher-Yates algorithm
      orderedQuestions = shuffleArray(filtered);
    } else {
      // Keep original order
      orderedQuestions = filtered;
    }
    
    // Select the requested number of questions
    const selected = orderedQuestions.slice(0, Math.min(numQuestions, orderedQuestions.length));

    setSelectedQuestions(selected);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowAnswer(false);
    setQuizState('quiz');
  };

  const handleAnswerSelect = (answerIndices) => {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    
    // Check if answers match
    const sortedUser = [...answerIndices].sort((a, b) => a - b);
    const sortedCorrect = [...currentQuestion.correctAnswer].sort((a, b) => a - b);
    const isCorrect = sortedUser.length === sortedCorrect.length && 
                     sortedUser.every((val, idx) => val === sortedCorrect[idx]);
    
    setUserAnswers([...userAnswers, { 
      questionId: currentQuestion.id, 
      answer: answerIndices, // array of selected indices
      isCorrect 
    }]);
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowAnswer(false);
    } else {
      setQuizState('results');
    }
  };

  const resetQuiz = () => {
    setQuizState('setup');
    setSelectedQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowAnswer(false);
  };

  const retryWrongQuestions = () => {
    // Get the questions that were answered incorrectly
    const wrongQuestions = selectedQuestions.filter((_, index) => 
      !userAnswers[index]?.isCorrect
    );
    
    // Shuffle them for a fresh attempt
    const shuffledWrong = shuffleArray(wrongQuestions);
    
    setSelectedQuestions(shuffledWrong);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowAnswer(false);
    setQuizState('quiz');
  };

  return (
    <div className="App">
      <header>
        <div className="header-content">
          <div>
            <h1>HPC Sucks! This doesn't ;)</h1>
            <p className="header-subtitle">There's still people who care!</p>
          </div>
          <button className="dark-mode-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main>
        {quizState === 'setup' && (
          <QuizSetup 
            onStart={startQuiz} 
            totalQuestions={allQuestions.length}
            allQuestions={allQuestions}
          />
        )}

        {quizState === 'quiz' && (
          <Question
            question={selectedQuestions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={selectedQuestions.length}
            onAnswerSelect={handleAnswerSelect}
            showAnswer={showAnswer}
            userAnswer={userAnswers[currentQuestionIndex]?.answer}
            onNext={handleNext}
          />
        )}

        {quizState === 'results' && (
          <Results
            questions={selectedQuestions}
            userAnswers={userAnswers}
            onReset={resetQuiz}
            onRetryWrong={retryWrongQuestions}
          />
        )}
      </main>
      <Analytics />

      <footer>
        <p>Made by <a target="_blank" href="https://javidsegura.github.io/portfolio/">Javi</a> and <a target="_blank" href="https://juan.aallende.com">Juan</a> in Zamora, Spain 🇪🇸</p>
      </footer>
    </div>
  );
}

export default App;

