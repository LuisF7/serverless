const express = require('express') //importar express
const app = express ()  // crear app

app.get('*',(req, res) => {
    console.log('Hola mundo, mi primera app serverless')
    res.send({ mensaje: "felipe" })
})  //una funcion que contiene request lo que envia el cliente, el objeto que se va a utilizar para contestar

module.exports = app    