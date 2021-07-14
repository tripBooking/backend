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

    .post('/tours/:id/booking', (req, res, next) => {
        const body = req.body
        const id = req.params.id
        console.log({id,body})
        res.send('got it')
    })

    
module.exports = router