const express = require('express')
const router = express.Router()

router
    .get('/tours', (req, res, next) => {
        res.send('now conected')
    })
    
module.exports = router