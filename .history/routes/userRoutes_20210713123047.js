const express = require('express')
const router = express.Router()
const Tours = require('../models/tours')
const stripe = require('../stripe')
// const notActive = new Tours({title:"fluff",active:true})
// const active = new Tours({ title: "buff", active: false })
// notActive.save()
// active.save()
router
    .get('/tours', async (req, res, next) => {
        try {
            const tourItems = await Tours.find().where( {active:true})
            res.send(tourItems)
        } catch (error) {
            res.status(400).send(error)
        }
    })

    .post('/tours/:id/booking', async (req, res, next) => {
        const userDetails= req.body
        const id = req.params.id
        const tour = await Tours.findById(id)
        if (!tour) {
            return res.status(400).send('No tour associated with that id')
        }

    
        res.send(tour)
    })

    
module.exports = router