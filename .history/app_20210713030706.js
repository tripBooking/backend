require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const Cors = require('cors')
const helmet = require('helmet')

const db = require('./utills/database')
const mongoose = require('mongoose')



app.use(Cors())
app.use(helmet())
app.use(express.json())



app.listen(port, () => {
    db.on('error', console.error.bind(console, "connection error:"))
    db.once('open', () => {
        const ExScheme = new mongoose.Schema({ name: String })
        ExScheme.methods.title = () => {
            const title = `welcome to your trip to ${this.name}`
            console.log(title)
            return title
        }
        const ExTrip = mongoose.model('Trip', ExScheme)

        const cancun = new ExTrip({ name: 'cancun' })
        cancun.title()
        
    })


    console.log(`Welcome to Trip Booker\n---------------------\n|Now running on Port ${port}|`)
})