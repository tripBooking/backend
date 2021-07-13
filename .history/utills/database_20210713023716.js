const mongose = require("mongoose")
const passcode =process.env.DBURL
const db = mongose.connection || 'hell'

module.exports = db