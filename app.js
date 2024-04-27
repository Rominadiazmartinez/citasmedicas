const express = require("express");
const moment = require('moment');
const chalk = require("chalk");
const { v4: uuidv4 } = require('uuid');
const _ = require('lodash');
const axios = require("axios");



const app = express();
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
    });

app.use(express.static('assets'))

let usuarios = [];

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html")
})


app.get("/crearUsuarios", (req, res) =>{
    axios
        .get("https://randomuser.me/api/")
        .then((data) =>{

            let nuevoUsuario = data.data.results[0]
            let {name, gender} = nuevoUsuario
            
            let usuario = {
                 nombre: name.first,
                 apellido: name.last,
                 id: uuidv4().slice(0,6),
                 timestamp: moment().format("MMMM Do YYYY, h:mm:ss"),
                 genero: gender
            }
            usuarios.push(usuario)
            let usuariosPorGenero = _.groupBy(usuarios, 'genero');
            console.log(chalk.blue.bgWhite(JSON.stringify(usuariosPorGenero)))

            res.send(usuariosPorGenero)
    })
    .catch((error) =>{
        console.log("Hubo un problema :(")
 })

})







