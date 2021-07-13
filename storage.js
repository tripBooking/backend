require('dotenv').config()
const admin = require('firebase-admin')
const serviceAccount = require('./serviceAcct.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.BUCKET
})

module.exports = admin.storage().bucket('tour-booking')