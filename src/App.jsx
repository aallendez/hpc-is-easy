import { useState } from 'react';
import { questions } from './data/questions';
import { questions as module1Questions } from './data/module-1/questions';
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

  // Combine all questions (original + module-1)
  const allQuestions = [...questions, ...module1Questions];

  const startQuiz = (numQuestions, selectedModules, randomOrder = true) => {
    
    // Filter questions by selected modules
    let filtered = allQuestions.filter(q => selectedModules.includes(q.module));

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

  return (
    <div className="App">
      <header>
        <h1>HPC Sucks! This doesn't ;)</h1>
        <p style={{ color: 'white' }}>There's still people who care!</p>
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

