require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const Cors = require('cors')
const helmet = require('helmet')

const db = require('./utills/database')
const mongoose = require('mongoose')

const ExScheme = new mongoose.Schema({ name: String })
const ExTrip = mongoose.model('exTrip', ExScheme)
const cancun = new ExTrip({name:'cancun'})
app.use(Cors())
app.use(helmet())
app.use(express.json())



app.listen(port, () => {
db.on('error', console.error.bind(console, "connection error:"))


    console.log(`Welcome to Trip Booker\n---------------------\n|Now running on Port ${port}|`)
})