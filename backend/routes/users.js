const express = require('express')
const {
    createUser, 
    getUser,
    getUsers, 
    deleteUser,
    updateUser,
    getQuiz,
    getQuizzes,
    createQuiz,
    deleteQuiz,
    updateQuiz
} = require('../controllers/userController')

const router = express.Router()

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
router.get('/:id/quiz/:id', getQuiz)

// GET all quizzes
router.get('/:id/quiz', getQuizzes)

// POST a new quiz
router.post('/:id/quiz/:id', createQuiz)

// DELETE a quiz
router.delete('/:id/quiz/:id', deleteQuiz)

// UPDATE a quiz
router.patch('/:id/quiz/:id', updateQuiz)

module.exports = router
