'use strict'
const path = require('path')
const express = require('express')
const app = express()

// loading body-parser
const bodyParser = require('body-parser')

// Loading routes
const mainRouter = require('./routes/mainRoutes.js')

// Configuring body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Configuring the routes
app.use('/', mainRouter)

// serving static files
app.use('/cdn', express.static('public'))

const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server is running on port', port)