const express = require('express');
const borrar=require('fs');
const router = express.Router();
const conexion = require('./database/db');
const crud = require('./controllers/crud');
const res = require('express/lib/response');
const multer = require('multer');
// let rutaAlmacen= multer.diskStorage({
//    destination:function(request,file,callback){
//       callback(null,'./public/archivos/');
//    },
//    filename:function(request,file,callback){
      
//       const fecha= Date.now();
//       callback(null,fecha+"_"+file.originalname)
//    }
// });

// const cargar=multer({storage:rutaAlmacen});


// --------Home page response index
router.get('/', (req, res) => {
   console.log("entró a index");
   res.render('index');
         
});

//-----------formulario
router.get('/formulario', (req, res) => {
   console.log("entró a formulario");
   res.render('formulario');

});

// guardar formulario
router.post('/save', crud.save);

module.exports = router; 

