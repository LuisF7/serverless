const express = require('express')
const router = express.Router()

router.get('/', (req,res) => { //rutas
    res.send('hola soy la orders')
})

module.exports = router