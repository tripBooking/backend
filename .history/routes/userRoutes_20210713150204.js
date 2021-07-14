const express = require('express')
const router = express.Router()
const Tours = require('../models/tours')
const stripe = require('../stripe')
const Users = require('../models/userModel')

const baby = new Tours({
    title: 'Follow with johnny',
    capacity: 22,
    opean: true,
    active: true,
    stops:["bar","club","da mall"]
})
baby.save()
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
        const findUser = await Users.findOne().where({phone:req.body.phone})
        if (!tour) {
            return res.status(400).send('No tour associated with that id')
        }
        let customer
        if (findUser) {
            customer = findUser
        }
        else {
            console.log('newly created')
             const newCustomer = await stripe.customers.create({phone:req.body.phone,email:req.body.email})

            customer = new Users({
                phone: req.body.phone,
                email: req.body.email,
                customerId:newCustomer.id
            })
            customer.save()
        }
     
       
        if (tour.going  < tour.capacity) {
            tour.attending.push(customer)
            tour.going = tour.going + 1
            tour.save()
            
        }
        
 



    
        res.send({customer,tour})
    })

    
module.exports = router