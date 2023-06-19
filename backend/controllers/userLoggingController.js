const UserLogging = require('../models/userLoggingModel')

// login user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

// signup user
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        // using static function from model for hashing
        const user = await UserLogging.signup(email, password)

        res.status(200).json({email, user})
    } catch (error) {
        res.status(400).json({error: error.mssg})
    }

    res.json({mssg: 'signup user'})
}

module.exports = { signupUser, loginUser }