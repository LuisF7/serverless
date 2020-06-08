const express = require('express') //importar express
const mongoose = require('mongoose')
const app = express ()  // crear app

mongoose.connect(process.env.MONGODB_URI)

const Users = mongoose.model('User', new mongoose.Schema({ name: String }))

Users.create({name: 'Luis Felipe'})

app.get('*',(req, res) => {
    Users.find()
    .then(x => res.send(x))
})  //una funcion que contiene request lo que envia el cliente, el objeto que se va a utilizar para contestar

module.exports = app    