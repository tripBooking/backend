require('dotenv').config({path:'../.env'})
const mongose = require("mongoose")
const passcode =process.env.DBURL
const db = mongose.connection
db.on('error',console.error.bind(console, "connection error:"))


module.exports = db