require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const Cors = require('cors')
const helmet = require('helmet')

const db = require('./database')
const mongoose = require('mongoose')



app.use(Cors())
app.use(helmet())
app.use(express.json())



app.listen(port, async () => {
    db.on('error', console.error.bind(console, "connection error:"))
    db.once('open', () => {
        console.log('---------------------\nDatabase is connected')
    })
        


    console.log(`Welcome to Trip Booker\n---------------------\nNow running on Port ${port}|`)
})