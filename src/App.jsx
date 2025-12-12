import { useState } from 'react';
import { questions } from './data/questions';
import { questions as module1Questions } from './data/module-1/questions';
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
    // Combine all questions (original + module-1)
    const allQuestions = [...questions, ...module1Questions];
    
    // Filter questions by module if specified
    let filtered = moduleFilter === 'all' 
      ? allQuestions 
      : allQuestions.filter(q => q.module === parseInt(moduleFilter));

    // DEBUG MODE: Always put question 53 (the image question) first
    const question53 = filtered.find(q => q.id === 53);
    const otherQuestions = filtered.filter(q => q.id !== 53);
    
    // Shuffle the other questions
    const shuffled = [...otherQuestions].sort(() => Math.random() - 0.5);
    
    // If question 53 exists, put it first, then add the rest
    const selected = question53 
      ? [question53, ...shuffled.slice(0, Math.min(numQuestions - 1, shuffled.length))]
      : shuffled.slice(0, Math.min(numQuestions, shuffled.length));

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
        <h1>🎯 MCQ Quiz Practice</h1>
      </header>

      <main>
        {quizState === 'setup' && (
          <QuizSetup 
            onStart={startQuiz} 
            totalQuestions={questions.length + module1Questions.length}
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

