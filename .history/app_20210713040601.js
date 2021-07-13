require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const Cors = require('cors')
const helmet = require('helmet')
const mongoose = require('mongoose')


const db = require('./database')
const storage = require('./storage')


app.use(Cors())
app.use(helmet())
app.use(express.json())



app.listen(port, async () => {
    console.log(`Welcome to Trip Booker\n---------------------\n\nNow running on Port ${port}|`)

    db.on('error', console.error.bind(console, "connection error:"))
    db.once('open', () => {
        console.log('---------------------\nDatabase is connected\n--------------------- ')
    })

    try {
        const x = await storage.bucket('tours').exists()
        console.log(x)
        
    } catch (error) {
        console.log(error)
    }
})