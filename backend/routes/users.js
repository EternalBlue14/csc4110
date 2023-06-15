const express = require('express')
const {
    createUser, 
    getUser,
    getUsers, 
    deleteUser,
    updateUser
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

module.exports = router