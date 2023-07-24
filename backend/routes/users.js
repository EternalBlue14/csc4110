const express = require('express')
const {
    loginUser,
    signupUser,
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser,
    getQuiz,
    getQuizzes,
    createQuiz,
    deleteQuiz,
    updateQuiz,
    getTopicQuizzes,
    topicAverage,
    quizAverage
} = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// GET a single user
router.get('/:id', getUser)

// GET all users
router.get('/', getUsers)

// POST a new user
router.post('/', createUser)

// DELETE a user
router.delete('/:id', deleteUser)

// UPDATE a user
router.patch('/:id', updateUser)

// GET a single quiz
router.get('/:id/quiz/:quizName', getQuiz)

// GET all quizzes
router.get('/:id/quiz', getQuizzes)

// POST a new quiz
router.post('/:id/quiz', createQuiz)

// DELETE a quiz
router.delete('/:id/quiz/:quizName', deleteQuiz)

// UPDATE a quiz
router.patch('/:id/quiz/:quizName', updateQuiz)

// GET all quizzes in topic
router.get('/:id/topic/:quizTopic', getTopicQuizzes)

// GET average topic score
router.get('/:id/topicAvg/:quizTopic', topicAverage)

// GET average quiz score
router.get('/:id/quizAvg', quizAverage)

module.exports = router
