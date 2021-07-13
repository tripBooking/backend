require('dotenv').config()
const mongose = require("mongoose")
const passcode = process.env.DBURL
mongoose.connect(passcode,{useNewUrlParser: true, useUnifiedTopology: true})
const db = mongose.connection


module.exports = db