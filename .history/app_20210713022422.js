require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const Cors = require('cors')
const helmet = require('helmet')
app.use(Cors())
app.use(helmet())
app.use(exress.json())

app.listen(port, () => {
    console.log(`Welcome to Trip Booker\n---------------------\n|Now running on Port ${port}|`)
})