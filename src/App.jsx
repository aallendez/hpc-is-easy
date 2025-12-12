import { useState } from 'react';
import { questions } from './data/questions';
import QuizSetup from './components/QuizSetup';
import Question from './components/Question';
import Results from './components/Results';
import './App.css';

function App() {
  const [quizState, setQuizState] = useState('setup'); // setup, quiz, results
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const startQuiz = (numQuestions, moduleFilter) => {
    // Filter questions by module if specified
    let filtered = moduleFilter === 'all' 
      ? questions 
      : questions.filter(q => q.module === parseInt(moduleFilter));

    // Shuffle and select the requested number of questions
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(numQuestions, shuffled.length));

    setSelectedQuestions(selected);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowAnswer(false);
    setQuizState('quiz');
  };

  const handleAnswerSelect = (answerIndex) => {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    setUserAnswers([...userAnswers, { 
      questionId: currentQuestion.id, 
      answer: answerIndex,
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
        <h1>🎯 MCQ Quiz Practice</h1>
      </header>

      <main>
        {quizState === 'setup' && (
          <QuizSetup 
            onStart={startQuiz} 
            totalQuestions={questions.length}
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
    </div>
  );
}

export default App;

