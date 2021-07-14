const express = require('express')
const router = express.Router()

router
    .get('/tours', async (req, res, next) => {
        try {
        const tourItems = await Tours.find()
        res.send(tourItems)
        } catch (error) {
            res.status(400).send(error)
            
        }
    })
    
module.exports = router