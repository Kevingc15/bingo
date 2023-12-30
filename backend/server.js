// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3025;

// Configuración de MongoDB
mongoose.connect('mongodb://localhost:27017/bingo', {
});

// Configuración de Express
app.use(cors());
app.use(bodyParser.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor en https://localhost:${port}`);
});
