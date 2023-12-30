// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Configuración de MongoDB
mongoose.connect('mongodb://localhost:27017/bingo-database', {
  useUnifiedTopology: true,
});

// Configuración de Express
app.use(cors());
app.use(bodyParser.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Backend funcionando!');
});

// Escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
