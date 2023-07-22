import React from 'react';
import './quiz.css';
import QuizContainer from '../components/QuizContainer';

export default function Quiz() {
    return (
      <div>
        <div>
          <h1 align="center">Quiz</h1>
        </div>
        <div className='QuizContainer'>
          <QuizContainer />
        </div>
      </div>
    )
  }