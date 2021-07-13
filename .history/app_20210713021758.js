require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000


app.listen(port, () => {
    console.log(`Welcome to Trip Booker\n----------------------\nNow running on Port ${port}|`)
})