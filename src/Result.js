import React from 'react';

function Result({ score, total, onRestart }) {
  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <p>Your score: {score} out of {total}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}

export default Result;