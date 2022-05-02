const express = require('express');
const app= express();
const port = 3000;
const dotenv=require('dotenv');
dotenv.config({path: './env/.env'});


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/', require('./router'));







app.listen(port,'localhost');
