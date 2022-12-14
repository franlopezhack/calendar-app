require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')




//Crear el servido de express
const app = express();

//Base de datos
require('./config/config.db')

//CORS
app.use(cors())
//Directorio publico
//use en express se entiende como un middleware
app.use(express.static('public'));

//Lectura de las peticiones en formato JSON
app.use(express.json())

//Rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))


//Puerto para escuchar las peticiones
app.listen(process.env.PORT, () => console.log(`Servidor corriendo en puerto ${process.env.PORT}`))