require('dotenv').config() // package for global vars

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/users')

const app = express()

// middleware to show requests
app.use(express.json()) // looks for json in incoming request bodies

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// tell express app to use routes from /routes/users.js
app.use('/api/users', userRoutes)  // /api/users defines request root

mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listens for requests on port in .env file
        app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


