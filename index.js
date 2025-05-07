const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor está funcionando!');
});

app.post('/webhook', async (req, res) => {
  console.log('📥 Webhook recebido:');
  console.log(JSON.stringify(req.body, null, 2));

  // Exemplo simples: apenas responde 200 OK
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

