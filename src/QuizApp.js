import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import './QuizApp.css';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    correctAnswer: "Jupiter"
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Tuvalu", "Monaco", "Nauru", "Vatican City"],
    correctAnswer: "Vatican City"
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Humpback whale", "Fin whale", "Blue whale", "Sperm whale"],
    correctAnswer: "Blue whale"
  }
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-app">
      {showResult ? (
        <Result score={score} total={questions.length} onRestart={restartQuiz} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions.length}
        />
      )}
    </div>
  );
}

export default QuizApp;