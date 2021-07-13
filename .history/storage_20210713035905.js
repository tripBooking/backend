require('dotenv').config()
import admin from 'firebase-admin'
admin.initializeApp({
    apiKey: process.env.STORAGE_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: "trip-7e154",
    storageBucket: process.env.BUCKET,
    messagingSenderId: process.env.MESSAGING_ID,
    appId: "1:748618792853:web:1c9d6ac1f3dab5bde8409c",
    measurementId: "G-VRMRBCKFD6"
})

module.exports = admin