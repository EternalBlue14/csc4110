const UserLogging = require('../models/userLoggingModel')

// login user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

// signup user
const signupUser = async (req, res) => {
    const {userName, password} = req.body

    try {
        // using static function from model for hashing
        const user = await UserLogging.signup(userName, password)

        res.status(200).json({userName, user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser, loginUser }