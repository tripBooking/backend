// const mongose = require('mongose')
const passcode =process.env.DBURL
const db = mongose.connection || 'hell'

module.exports = db