const mongoose = require('mongoose')

const Schema = mongoose.Schema

const quizSchema = new Schema({
    quizName: {
        type: String,
        required: true
    },
    score: {
        type: Number
    }
})

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    quizzes: [quizSchema]
}, { timestamps: true })


// make a model to apply the schema
// this builds a collection
module.exports = mongoose.model('User', userSchema)