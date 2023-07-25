import React, { useEffect, useState} from 'react';
import './Quiz2.css';
import QuizContainer from '../components/QuizContainer';
import { useLocation } from 'react-router-dom';

export default function Quiz2() {
    
    const [questionSet, setQuestionSet] = useState([]);

    const ucQuestions2 = [
		{
			questionText: 'Convert 75 centimeters to meters',
			answerOptions: [
				{ answerText: '0.0075', isCorrect: false },
				{ answerText: '0.075', isCorrect: false },
				{ answerText: '0.75', isCorrect: true },
				{ answerText: '7.5', isCorrect: false },
			],
		},
		{
			questionText: 'Convert 18 inches to centimeters',
			answerOptions: [
				{ answerText: '18', isCorrect: false },
				{ answerText: '36', isCorrect: false },
				{ answerText: '45', isCorrect: true },
				{ answerText: '72', isCorrect: false },
			],
		},
		{
			questionText: 'Convert 2500 millimeters to meters',
			answerOptions: [
				{ answerText: '0.025', isCorrect: false },
				{ answerText: '0.25', isCorrect: false },
				{ answerText: '2.5', isCorrect: true },
				{ answerText: '25', isCorrect: false },
			],
		},
		{
			questionText: 'Convert 8 feet to yards',
			answerOptions: [
				{ answerText: '2', isCorrect: false },
				{ answerText: '2.67', isCorrect: true },
				{ answerText: '3', isCorrect: false },
				{ answerText: '3.5', isCorrect: false },
			],
		},
	];

    const pcQuestions2 = [
		{
			questionText: 'sin(pi/4)',
			answerOptions: [
				{ answerText: 'sqrt(3)/2', isCorrect: false },
				{ answerText: '1/2', isCorrect: false },
				{ answerText: '0', isCorrect: false },
				{ answerText: 'sqrt(2)/2', isCorrect: true },
			],
		},
		{
			questionText: 'sin(3pi/4)',
			answerOptions: [
				{ answerText: 'sqrt(3)/2', isCorrect: false },
				{ answerText: '0', isCorrect: false },
				{ answerText: '1/2', isCorrect: false },
				{ answerText: 'sqrt(2)/2', isCorrect: true },
			],
		},
		{
			questionText: 'sin(5pi/4)',
			answerOptions: [
				{ answerText: 'sqrt(2)/2', isCorrect: true },
				{ answerText: '0', isCorrect: false },
				{ answerText: '1/2', isCorrect: false },
				{ answerText: 'sqrt(3)/2', isCorrect: false },
			],
		},
		{
			questionText: 'sin((7pi/4))',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: 'sqrt(3)/2', isCorrect: false },
				{ answerText: '0', isCorrect: false },
				{ answerText: 'sqrt(2)/2', isCorrect: true },
			],
		},
	];


	const alQuestions2 = [
		{
			questionText: 'x^2 + 3x - 54',
			answerOptions: [
				{ answerText: 'x=3,6', isCorrect: false },
				{ answerText: 'x=-3,6', isCorrect: false },
				{ answerText: 'x=6,-9', isCorrect: true },
				{ answerText: 'x=-6,9', isCorrect: false },
			],
		},
		{
			questionText: 'x^2 - 8x + 12',
			answerOptions: [
				{ answerText: 'x=6,2', isCorrect: true },
				{ answerText: 'x=-6,-2', isCorrect: false },
				{ answerText: 'x=4,3', isCorrect: false },
				{ answerText: 'x=-4,3', isCorrect: false },
			],
		},
		{
			questionText: 'x^2 + 10x + 24',
			answerOptions: [
				{ answerText: 'x=4,6', isCorrect: false },
				{ answerText: 'x=-4,-6', isCorrect: true },
				{ answerText: 'x=-8,2', isCorrect: false },
				{ answerText: 'x=8,3', isCorrect: false },
			],
		},
		{
			questionText: 'x^2 + 11x + 28',
			answerOptions: [
				{ answerText: 'x=-7,-4', isCorrect: true },
				{ answerText: 'x=-14.-2', isCorrect: false },
				{ answerText: 'x=13,-3', isCorrect: false },
				{ answerText: 'x=7,4', isCorrect: false },
			],
		},
	];

    const location = useLocation();

    useEffect(() => {
      if (location.pathname.includes('Topic1')) {
        setQuestionSet(pcQuestions2);
      } else if (location.pathname.includes('UnitConversions')) {
        setQuestionSet(ucQuestions2);
      } else if (location.pathname.includes('Algebra')) {
        setQuestionSet(alQuestions2);
      }
    }, [location.pathname]);
  
    console.log(questionSet);
  
      return (
        <div>
          <div>
            <h1 align="center">Quiz 2</h1>
          </div>
          <div className='QuizContainer'>
            <QuizContainer questions={questionSet} />
          </div>
        </div>
      )

}