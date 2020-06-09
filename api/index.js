const express = require('express') //importar express
const mongoose = require('mongoose')
const plates = require ('./Routes/plates')
const orders = require ('./Routes/orders') 
const app = express ()  // crear app

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology: true })

app.use('/api/plates', plates)
app.use('/api/orders', orders)

module.exports = app    