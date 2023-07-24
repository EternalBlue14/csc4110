import './QuizContainer.css';
import React, { useState } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';


function QuizContainer(props){

	const { questions } = props;

	const navigate = useNavigate()
	
	const handleGoBack = () => {
		navigate(-1);
	}

	const handleRestartQuiz = () => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
	  };

	
    // const questions = [
	// 	{
	// 		questionText: 'sin(0)',
	// 		answerOptions: [
	// 			{ answerText: 'sqrt(3)/2', isCorrect: false },
	// 			{ answerText: '1/2', isCorrect: false },
	// 			{ answerText: '0', isCorrect: true },
	// 			{ answerText: 'pi', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'sin(pi)',
	// 		answerOptions: [
	// 			{ answerText: 'sqrt(3)/2', isCorrect: false },
	// 			{ answerText: '0', isCorrect: true },
	// 			{ answerText: '1/2', isCorrect: false },
	// 			{ answerText: '1', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'sin(pi/2)',
	// 		answerOptions: [
	// 			{ answerText: '1', isCorrect: true },
	// 			{ answerText: '0', isCorrect: false },
	// 			{ answerText: '1/2', isCorrect: false },
	// 			{ answerText: 'sqrt(3)/2', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'sin((3pi/2))',
	// 		answerOptions: [
	// 			{ answerText: '1', isCorrect: true },
	// 			{ answerText: 'sqrt(3)/2', isCorrect: false },
	// 			{ answerText: '0', isCorrect: false },
	// 			{ answerText: '1/2', isCorrect: false },
	// 		],
	// 	},
	// ];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	if (!questions || questions.length === 0) {
		return <div>Loading...</div>;
	  }
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					{/* <button className='round-button' onClick={handleGoBack}>Go Back</button>
					<button className='round-button' onClick={handleRestartQuiz}>Restart</button> */}
					<div className = 'button-container'>
						<button className='round-button' onClick={handleGoBack}>Go Back</button>
						<button className='round-button' onClick={handleRestartQuiz}>Restart</button>
					</div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<h1><span>Question {currentQuestion + 1}</span>/{questions.length}</h1>
						</div>
						<h2><div className='question-text'>{questions[currentQuestion].questionText}</div></h2>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default QuizContainer