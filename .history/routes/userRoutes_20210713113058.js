const express = require('express')
const router = express.Router()
const Tours = require('../models/tours')
router
    .get('/tours', async (req, res, next) => {
        const tourItems = await Tours.find()
        res.send(tourItems)
        
    })
    
module.exports = router