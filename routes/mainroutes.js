'use strict'

const express = require('express')
const path = require('path')
const mainRouter = express.Router()

mainRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'indexx.html'))
})


module.exports = mainRouter
