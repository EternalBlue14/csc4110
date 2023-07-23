import { createContext, useReducer } from 'react';

export const quizContext = createContext();

export const QuizReducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUIZZES':
      return {
        quiz: action.payload
      };
    case 'CREATE_QUIZ':
      return {
        quiz: [action.payload, ...state.workouts]
      };
    case 'DELETE_QUIZ':
      return {
        quiz: state.quiz.filter((w) => w._id !== action.payload._id)
      };
    default:
      return state;
  }
};

export const QuizContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(QuizReducer, {
    quiz: null
  });

  return (
    <quizContext.Provider value={{ ...state, dispatch }}>
      {children}
    </quizContext.Provider>
  );
};
