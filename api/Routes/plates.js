const express = require('express')
const router = express.Router()

router.get('/', (req,res) => { //rutas
    res.send('hola soy la plates')
})

module.exports = router