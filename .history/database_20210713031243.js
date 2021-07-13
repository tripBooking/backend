require('dotenv').config()
const mongose = require("mongoose")
const passcode =process.env.DBURL
const db = mongose.connection


module.exports = db