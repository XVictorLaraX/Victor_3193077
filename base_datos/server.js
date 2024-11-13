const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql2');

const app = express();
// Configuracion para el uso de peticiones POST
app.use(bodyParser.urlencoded({extended:false}));

// Plantilla dinamicas
app.set('view engine','ejs')

// Crear la conexion a la BD
// Se comprueba la compatibilidad con MariaDB
const db = mysql.createConnection({
    host:       'localhost',
    user:       'root',
    password:   '1234',
    database:   'conexion',
    port:       3306
});

// Comprobacion de la conexion 
db.connect(err=> {
    if(err){
        console.log(`Error de conexion: ${err}`);
    }else{
        console.log(`Conexion a base de datos exitosa`)
    }
});

// Iniciar servidor
const puerto = 3009;
app.listen(puerto,()=>{
    console.log(`Servidor funcionando en: http://localhost:${puerto}`);
});