const User = require('../models/userModel')
const mongoose = require('mongoose')
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
        const user = await User.login(userName, password)

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
        const user = await User.signup(userName, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({userName, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// get all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json({users})
}

// get a single user
const getUser = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"})
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({error: "No such user"})
    }

    res.status(200).json({user})
}

// create new user
const createUser = async (req, res) => {
    const {userName, password} = req.body
    // add doc to db
    try {
        const user = await User.create({userName, password}) // create is asynchronous
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a user
const deleteUser = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"})
    }

    const user = await User.findOneAndDelete({_id: id}) // _id for mongodb

    if (!user) {
        return res.status(400).json({error: "No such user"})
    }
    res.status(200).json(user)
}

// update a user
const updateUser = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"})
    }

    const user = await User.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if (!user) {
        return res.status(400).json({error: "No such user"})
    }
    res.status(200).json(user)
}

// get a single quiz from user
const getQuiz = async (req, res) => {
    const {id, quizName} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"})
    }

    try {
        // retrieve user
        const user = await User.findById(id)

        // retrieve quiz within user
        const quiz = user.quizzes.filter((quiz) => {return quiz.quizName === quizName})[0]
        
        if(!quiz) {
            return res.status(404).json({error: "No such quiz"})
        }
        
        res.status(200).json(quiz)
    }
    catch (e) {
        console.log(e.message)
        res.status(400).json({error: e.message})
    }
}

// get all of a user's quizzes
const getQuizzes = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"})
    }

    try {
        const user = await User.findById(id)
        res.status(200).json(user.quizzes)
    }
    catch (e) {
        console.log(e.message)
        res.status(400).json({error: e.message})
    }
}

// create a new quiz for user
const createQuiz = async (req, res) => {
    const {id} = req.params
    const {quizName, quizScore} = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"})
    }

    try {
        // retrieve user
        const user = await User.findById(id)
        const quiz = user.quizzes.filter((quiz) => {return quiz.quizName === quizName})[0]

        if(quiz) {
            return res.status(400).json({error: "Quiz already exists"})
        }
        
        // create quiz data within user
        user.quizzes.push({quizName, quizScore})
        user.save()

        res.status(200).json({user})
    }
    catch (e) {
        console.log(e.message)
        res.status(400).json({error: e.message})
    }
}

// delete a single quiz from user
const deleteQuiz = async (req, res) => {
    const {id, quizName} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"})
    }

    try {
        // retrieve user
        const user = await User.findById(id)
        // remove quiz
        user.quizzes.pull({quizName})
        user.save()

        // needed for updated view after deletion
        const updatedUser = await User.findById(id)
        res.status(200).json(updatedUser)
    }
    catch (e) {
        console.log(e.message)
        res.status(400).json({error: e.message})
    }
}

// update a single quiz for user
const updateQuiz = async (req, res) => {
    const {id, quizName} = req.params
    const quizScore = req.body.score

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"})
    }

    try {
        // retrieve user
        const user = await User.findById(id)

        if (!User.findById(id).quizzes.exists({name: quizName})) {
            return res.status(404).json({error: "No such quiz"})
        }

        // retrieve quiz within user
        const quiz = await user.quizzes.findOne({name: quizName})
        quiz.score = quizScore
        quiz.save()

        res.status(200).json(quiz)
    }
    catch (e) {
        console.log(e.message)
        res.status(400).json({error: e.message})
    }
}

module.exports = {
    loginUser,
    signupUser,
    getUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    getQuiz,
    getQuizzes,
    createQuiz,
    deleteQuiz,
    updateQuiz
}