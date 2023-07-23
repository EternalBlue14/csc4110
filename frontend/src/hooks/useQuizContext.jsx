import { quizContext } from '../quizContext'
import { useContext } from 'react'

export const useQuizContext = () => {
    const context = useContext(quizContext)

    if (!context) {
        throw Error('useQuizContext must be used inside a QuizContextProvider')
    }

    return context
}