// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const tarjetaRoutes = require('./src/routes/tarjetaRoutes');
const carteraRoutes = require('./src/routes/carteraRoutes');

dotenv.config(); // Cargar variables de entorno

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
    res.send('hello, world!')
})

app.use('/api', tarjetaRoutes); // Rutas de las tarjetas
app.use('/api', carteraRoutes); // Rutas de las cartera

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});

