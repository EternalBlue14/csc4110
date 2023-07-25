import React, { useEffect, useState} from 'react';
import './quiz.css';
import QuizContainer from '../components/QuizContainer';
import { useLocation } from 'react-router-dom';

export default function Quiz() {

  const [questionSet, setQuestionSet] = useState([]);

  const ucQuestions1 = [
		{
			questionText: '1 meter is equal to how many centimeters?',
			answerOptions: [
				{ answerText: '10', isCorrect: false },
				{ answerText: '100', isCorrect: true },
				{ answerText: '1000', isCorrect: false },
				{ answerText: '10000', isCorrect: false },
			],
		},
		{
			questionText: '1 centimeter is equal to how many milimeters?',
			answerOptions: [
				{ answerText: '0.1', isCorrect: false },
				{ answerText: '1', isCorrect: false },
				{ answerText: '10', isCorrect: true },
				{ answerText: '100', isCorrect: false },
			],
		},
		{
			questionText: '1 inch is equal to approximately how many centimeters?',
			answerOptions: [
				{ answerText: '2.5', isCorrect: true },
				{ answerText: '4', isCorrect: false },
				{ answerText: '10', isCorrect: false },
				{ answerText: '20', isCorrect: false },
			],
		},
		{
			questionText: '1 foot is equal to how many inches?',
			answerOptions: [
				{ answerText: '10', isCorrect: false },
				{ answerText: '12', isCorrect: true },
				{ answerText: '24', isCorrect: false },
				{ answerText: '36', isCorrect: false },
			],
		},
	];

  const pcQuestions1 = [
		{
			questionText: 'sin(0)',
			answerOptions: [
				{ answerText: 'sqrt(3)/2', isCorrect: false },
				{ answerText: '1/2', isCorrect: false },
				{ answerText: '0', isCorrect: true },
				{ answerText: 'pi', isCorrect: false },
			],
		},
		{
			questionText: 'sin(pi)',
			answerOptions: [
				{ answerText: 'sqrt(3)/2', isCorrect: false },
				{ answerText: '0', isCorrect: true },
				{ answerText: '1/2', isCorrect: false },
				{ answerText: '1', isCorrect: false },
			],
		},
		{
			questionText: 'sin(pi/2)',
			answerOptions: [
				{ answerText: '1', isCorrect: true },
				{ answerText: '0', isCorrect: false },
				{ answerText: '1/2', isCorrect: false },
				{ answerText: 'sqrt(3)/2', isCorrect: false },
			],
		},
		{
			questionText: 'sin((3pi/2))',
			answerOptions: [
				{ answerText: '1', isCorrect: true },
				{ answerText: 'sqrt(3)/2', isCorrect: false },
				{ answerText: '0', isCorrect: false },
				{ answerText: '1/2', isCorrect: false },
			],
		},
	];

	const alQuestions1 = [
		{
			questionText: 'sin(0)',
			answerOptions: [
				{ answerText: 'sqrt(3)/2', isCorrect: false },
				{ answerText: '1/2', isCorrect: false },
				{ answerText: '0', isCorrect: true },
				{ answerText: 'pi', isCorrect: false },
			],
		},
		{
			questionText: 'sin(pi)',
			answerOptions: [
				{ answerText: 'sqrt(3)/2', isCorrect: false },
				{ answerText: '0', isCorrect: true },
				{ answerText: '1/2', isCorrect: false },
				{ answerText: '1', isCorrect: false },
			],
		},
		{
			questionText: 'sin(pi/2)',
			answerOptions: [
				{ answerText: '1', isCorrect: true },
				{ answerText: '0', isCorrect: false },
				{ answerText: '1/2', isCorrect: false },
				{ answerText: 'sqrt(3)/2', isCorrect: false },
			],
		},
		{
			questionText: 'sin((3pi/2))',
			answerOptions: [
				{ answerText: '1', isCorrect: true },
				{ answerText: 'sqrt(3)/2', isCorrect: false },
				{ answerText: '0', isCorrect: false },
				{ answerText: '1/2', isCorrect: false },
			],
		},
	];

  // useEffect(() => {
  //   if (window.location.href.indexOf('Topic1') !== -1) {
  //     setQuestionSet(pcQuestions1);
  //   } else if (window.location.href.indexOf('UnitConversions') !== -1) {
  //     setQuestionSet(ucQuestions1);
  //   }
  
  // }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('Topic1')) {
      setQuestionSet(pcQuestions1);
    } else if (location.pathname.includes('UnitConversions')) {
      setQuestionSet(ucQuestions1);
    }
  }, [location.pathname]);

  console.log(questionSet);

    return (
      <div>
        <div>
          <h1 align="center">Quiz 1</h1>
        </div>
        <div className='QuizContainer'>
          <QuizContainer questions={questionSet} />
        </div>
      </div>
    )
  }