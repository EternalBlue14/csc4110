import './QuizContainer.css';
import React, { useState, useEffect } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';


function QuizContainer(props, topic){

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
	const login = useAuthContext();

	if (!questions || questions.length === 0) {
		
  		const arr = [];
  		for (const key in login) {
    		const arrObj = login[key];
    		arrObj['id'] = key;
    		arr.push(arrObj)
  		}
  		//Extracts the userName key field from the array of objects into a regular array
  		const userArr= arr.map((dataItem) => dataItem.userName);
  		//Convert the array to just a standard variable with one value since the above array is saved as
  		//[userName, undefined] and we need a single value variable to pass into the api call
  		var userNamed;
  		for (var i = 0; i <= userArr.length; i++)
  		{
  		  userNamed = userArr[0];
  		}  
  		console.log(userNamed); //Keeping track to ensure the above operation performs as intended
		  const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ userNamed, score, topic })
		};
		fetch(`/api/users/${ userNamed }/quiz`, requestOptions)
			.then(response => response.json())
			.then(console.log(userNamed));
		
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