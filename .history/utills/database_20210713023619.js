const mongose = require('mongose')
const passcode =process.env.DBURL
const db = mongose.connection

module.exports = db