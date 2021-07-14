const express = require('express')
const router = express.Router()
const Tours = require('../models/tours')
const fluff = new Tours({ title: 'Fluff tour ' })
fluff.save()
router
    .get('/tours', async (req, res, next) => {
        const tourItems = await Tours.find()
        res.send(tourItems)
    })
    
module.exports = router