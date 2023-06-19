const UserLogging = require('../models/userLoggingModel')
const jwt = require('jsonwebtoken')

// create tokens for user validation
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login user
const loginUser = async (req, res) => {
    const { userName, password } = req.body

    try {
        // using static function from model for login
        const user = await UserLogging.login(userName, password)

        // create a token
        const token = createToken(user._id)
        console.log(token)

        res.status(200).json({userName, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// signup user
const signupUser = async (req, res) => {
    const {userName, password} = req.body

    try {
        // using static function from model for hashing
        const user = await UserLogging.signup(userName, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({userName, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser, loginUser }