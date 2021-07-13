require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const Cors = require('cors')
const helmet = require('helmet')

const db = require('./utills/database')

app.use(Cors())
app.use(helmet())
app.use(express.json())



app.listen(port, () => {

    console.log(`Welcome to Trip Booker\n---------------------\n|Now running on Port ${port}|`)
    db.on('error',console.error.bind(console, "connection error:"))
    db.once("open", () => {
        console.log('now connected to data base')
    })
})