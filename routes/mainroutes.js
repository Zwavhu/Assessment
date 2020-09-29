'use strict'

const express = require('express')
const path = require('path')
const mainRouter = express.Router()

mainRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'indexx.html'))
})

mainRouter.get('/read/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'readProduct.html'))
})

mainRouter.get('/edit/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'edit.html'))
})


module.exports = mainRouter
