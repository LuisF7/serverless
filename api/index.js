const express = require('express') //importar express
const mongoose = require('mongoose')
const app = express ()  // crear app

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology: true })


app.get('*',(req, res) => {
    res.send('Hola mundo')
})  //una funcion que contiene request lo que envia el cliente, el objeto que se va a utilizar para contestar

module.exports = app    