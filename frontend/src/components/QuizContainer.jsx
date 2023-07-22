import React, { useState } from 'react';

function QuizContainer(){
    const questions = [
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
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
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