require('dotenv').config()
const mongoose = require("mongoose")
const passcode = process.env.DBURL
mongoose.connect(passcode,{useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection


module.exports = db