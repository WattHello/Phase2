import React from 'react';

function Question({ question, onAnswer, currentQuestion, totalQuestions }) {
  return (
    <div className="question">
      <h2>Question {currentQuestion} of {totalQuestions}</h2>
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => onAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;