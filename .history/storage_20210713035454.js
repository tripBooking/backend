require('dotenv').config()
import admin from 'firebase-admin'
admin.initializeApp({
    apiKey: process.env.STORAGE_KEY,
    authDomain: "trip-7e154.firebaseapp.com",
    projectId: "trip-7e154",
    storageBucket: process.env.BUCKET,
    messagingSenderId: "748618792853",
    appId: "1:748618792853:web:1c9d6ac1f3dab5bde8409c",
    measurementId: "G-VRMRBCKFD6"
})