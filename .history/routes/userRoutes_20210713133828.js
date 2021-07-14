const express = require('express')
const router = express.Router()
const Tours = require('../models/tours')
const stripe = require('../stripe')
const Users = require('../models/userModel')


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
        Users.find().where({phone:userDetails.phone})
        const customer = await stripe.customers.create(userDetails)
        if (!customer) {
            res.status(400).send('could create user')
        }

        console.log(customer.id)
        if (tour.going + 1 < tour.capacity) {
            tour.attending.push({ customerId: customer.id, attended: 0 })
            tour.going += 1
            tour.save()
            
        }
        
 



    
        res.send({tour,customerId:customer.id})
    })

    
module.exports = router