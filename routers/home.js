const express = require('express');

const homeRouter = express.Router()

homeRouter

    .get('/', (req,res) => {
        res.redirect('http://localhost:3000/client')
    })

module.exports = {
    homeRouter,
}