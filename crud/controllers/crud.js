const { redirect, render } = require("express/lib/response");
const conexion = require("../database/db");
const borrar=require('fs');

exports.save = (req, res) => {
    const user = req.body.user;
    const email = req.body.email;
    const password = req.body.pass1;
    const postcode = req.body.codipos;
    const genere = req.body.genere;
    const city = req.body.ciudad;

    conexion.query('INSERT INTO registers SET ?', 
    { user:user, email:email,password:password,postcode:postcode,genere:genere,city:city }, (error, results) => {
        if (error) {
            console.log(error)

        } else {
            var string = encodeURIComponent('¡La accion se ha completado exitosamente!');
            res.render("index");
        }
    })
}
