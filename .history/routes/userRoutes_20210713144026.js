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
        const findUser = await Users.findOne().where({phone:userDetails.phone})
        if (!tour) {
            return res.status(400).send('No tour associated with that id')
        }
        let customer
        console.log(findUser)
        if (findUser[0]) {
            res.send('found')
        }
        res.send('not found')

        // if (searchedUser === [ ]) {
        //      const newCustomer = await stripe.customers.create(userDetails)
        //     if (!newCustomer) {
        //         res.status(400).send('could create user')
        //     }
        //     const newUser = new Users({ customerId: newCustomer.id, phone: userDetails.phone, email: userDetails.email })
        //     console.log({newUser})
        //     newUser.save()
        //     customer = newUser
        //     res.send('new user')
        // }
        // else {
        //     customer = searchedUser
        // }
       
        // if (tour.going  < tour.capacity) {
        //     tour.attending.push({phone: userDetails.phone, email: userDetails.email})
        //     tour.going = tour.going + 1
        //     tour.save()
            
        // }
        
 



    
        // res.send({customer})
    })

    
module.exports = router