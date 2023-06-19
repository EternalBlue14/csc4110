const express = require('express')
const { signupUser } = require('../controllers/userLoggingController')

// controller functions
const { singupUser, loginUser } = requre('../controllers/userLoggingController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

module.exports = router