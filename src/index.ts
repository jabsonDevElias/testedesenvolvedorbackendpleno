import express from 'express';

const app = express();
const port = 8000;

app.get('/', (_req, res) => {
  res.send('Meu Teste!');
});

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
});
