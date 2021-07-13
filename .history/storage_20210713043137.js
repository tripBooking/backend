require('dotenv').config()
const admin = require('firebase-admin')
const serviceAccount = require('./serviceAcct.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://trip-7e154.appspot.com"
})

module.exports = admin.storage().bucket('tour-booking ')