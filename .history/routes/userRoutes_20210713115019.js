const express = require('express')
const router = express.Router()
const Tours = require('../models/tours')

// const notActive = new Tours({title:"fluff",active:true})
// const active = new Tours({ title: "buff", active: false })
// notActive.save()
// active.save()
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