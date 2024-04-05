const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/clientes', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/clientes.html'));
});

app.get('/productos', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/productos.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});
