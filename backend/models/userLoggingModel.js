const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userLoggingSchema = new Schema({
    userName: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

// static method for password hashing etc
userLoggingSchema.statics.signup = async function(userName, password) {

    // validation
    if (!email || !password) {
        throw Error('All fields must be completed.')
    }
    // password validation using validator package
    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough")
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('username in use')
    }

    // generate a salt and hash w/ password
    const salt = await bcrypt.genSalt(8)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user

}


// make a model to apply the schema
// this builds a collection
module.exports = mongoose.model('UserLogging', userLoggingSchema)