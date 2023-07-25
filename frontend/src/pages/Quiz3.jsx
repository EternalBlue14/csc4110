import React, { useEffect, useState} from 'react';
import QuizContainer from '../components/QuizContainer';
import { useLocation } from 'react-router-dom';

export default function Quiz3() {
    
    const [questionSet, setQuestionSet] = useState([]);

    const ucQuestions3 = [
		{
			questionText: 'Convert 1.5 miles to km',
			answerOptions: [
				{ answerText: '1.6', isCorrect: false },
				{ answerText: '2.1', isCorrect: false },
				{ answerText: '2.41', isCorrect: true },
				{ answerText: '2.6', isCorrect: false },
			],
		},
		{
			questionText: 'Convert 2.5 yards to feet',
			answerOptions: [
				{ answerText: '4.5', isCorrect: false },
				{ answerText: '5', isCorrect: false },
				{ answerText: '7.5', isCorrect: true },
				{ answerText: '9', isCorrect: false },
			],
		},
		{
			questionText: 'Convert 7500 millimeters to inches',
			answerOptions: [
				{ answerText: '7.5', isCorrect: false },
				{ answerText: '75', isCorrect: false },
				{ answerText: '275', isCorrect: false },
				{ answerText: '295', isCorrect: true },
			],
		},
		{
			questionText: 'Convert 5 km to meters',
			answerOptions: [
				{ answerText: '50', isCorrect: false },
				{ answerText: '500', isCorrect: false },
				{ answerText: '5000', isCorrect: true },
				{ answerText: '50000', isCorrect: false },
			],
		},
	];

    const pcQuestions3 = [
		{
			questionText: 'cos(pi/2)',
			answerOptions: [
				{ answerText: 'sqrt(3)/2', isCorrect: false },
				{ answerText: '1/2', isCorrect: false },
				{ answerText: '0', isCorrect: true },
				{ answerText: 'sqrt(2)/2', isCorrect: false },
			],
		},
		{
			questionText: 'cos(3pi/2)',
			answerOptions: [
				{ answerText: 'sqrt(3)/2', isCorrect: false },
				{ answerText: '0', isCorrect: true },
				{ answerText: '1/2', isCorrect: false },
				{ answerText: 'sqrt(2)/2', isCorrect: false },
			],
		},
		{
			questionText: 'cos(5pi/4)',
			answerOptions: [
				{ answerText: 'sqrt(2)/2', isCorrect: true },
				{ answerText: '0', isCorrect: false },
				{ answerText: '1/2', isCorrect: false },
				{ answerText: 'sqrt(3)/2', isCorrect: false },
			],
		},
		{
			questionText: 'cos(0)',
			answerOptions: [
				{ answerText: '1', isCorrect: true },
				{ answerText: 'sqrt(3)/2', isCorrect: false },
				{ answerText: '0', isCorrect: false },
				{ answerText: 'sqrt(2)/2', isCorrect: false },
			],
		},
	];

    const alQuestions3 = [
		{
			questionText: 'x^2 + 13x + 40',
			answerOptions: [
				{ answerText: 'x=10,4', isCorrect: false },
				{ answerText: 'x=-10,-4', isCorrect: false },
				{ answerText: 'x=-8,-5', isCorrect: true },
				{ answerText: 'x=-8,5', isCorrect: false },
			],
		},
		{
			questionText: 'x^2 + 5x + 0',
			answerOptions: [
				{ answerText: 'x=0,-5', isCorrect: true },
				{ answerText: 'x=-0,5', isCorrect: false },
				{ answerText: 'x=-2.5,-2.5', isCorrect: false },
				{ answerText: 'x=-2.5,-2.5', isCorrect: false },
			],
		},
		{
			questionText: 'x^2 + 4x - 45',
			answerOptions: [
				{ answerText: 'x=-5,9', isCorrect: false },
				{ answerText: 'x=5,-9', isCorrect: true },
				{ answerText: 'x=-5,-9', isCorrect: false },
				{ answerText: 'x=15,-3', isCorrect: false },
			],
		},
		{
			questionText: 'x^2 - 9x + 20',
			answerOptions: [
				{ answerText: 'x=-5,4', isCorrect: true },
				{ answerText: 'x=-10,-2', isCorrect: false },
				{ answerText: 'x=5,-4', isCorrect: false },
				{ answerText: 'x=-5,-4', isCorrect: false },
			],
		},
	];

    const location = useLocation();

    useEffect(() => {
      if (location.pathname.includes('Topic1')) {
        setQuestionSet(pcQuestions3);
      } else if (location.pathname.includes('UnitConversions')) {
        setQuestionSet(ucQuestions3);
      } else if (location.pathname.includes('Algebra')) {
        setQuestionSet(alQuestions3);
      }
    }, [location.pathname]);
  
    console.log(questionSet);
  
      return (
        <div>
          <div>
            <h1 align="center">Quiz 3</h1>
          </div>
          <div className='QuizContainer'>
            <QuizContainer questions={questionSet} topic={"precalc"}/>
          </div>
        </div>
      )

}