import React from 'react';
import './quiz.css';
import QuizContainer from '../components/QuizContainer';

//import ImprovPtsContainer from '../components/ImprovPtsContainer';

export default function quiz() {
    return (
      <div>
        <div>
          <h1>Quiz</h1>
        </div>
        <div className='QuizContainer'>
          <QuizContainer />
        </div>
      </div>
    )
  }