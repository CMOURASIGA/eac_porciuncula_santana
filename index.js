const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const token = 'EAAKOELSWQlIBO5yUMrJInZAPdsKtInZCksLSv1WBDJhcomkgQo91wqQA7Cq7iWFIdYJ309fV7603G2rKWh4USk49uVrcflepiZA2yvaHMDdUtx3vC7MvdwbHGwYKU6JzRkVt21Rmo9aZAUV8G7rx8nYaXWNOflF9BDe7NMZCGFKAetAaX5wnaYqqZBl5R0bRyDwSLyVe71Irx8V4jSZApHR52N10ZBwZD'; // Substitua aqui pelo token do WhatsApp Cloud API
const phone_number_id = '572870979253681'; // Substitua aqui pelo ID do número de telefone
const recipient_number = '5521998934970'; // Coloque o número de destino com DDI (ex: 5581...)

app.get('/', (req, res) => {
  res.send('Servidor do WhatsApp Cloud está rodando 🚀');
});

app.get('/send-message', async (req, res) => {
  try {
    const messageData = {
      messaging_product: 'whatsapp',
      to: recipient_number,
      type: 'text',
      text: { body: 'Olá! Esta é uma mensagem de teste enviada pela API do WhatsApp Cloud.' }
    };

    const response = await axios.post(
      `https://graph.facebook.com/v19.0/${phone_number_id}/messages`,
      messageData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.status(200).send('Mensagem enviada com sucesso ✅');
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error.response ? error.response.data : error.message);
    res.status(500).send('Erro ao enviar mensagem ❌');
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


