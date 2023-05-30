const express = require('express');
const cors = require('cors');
const app = express();
const soundtrack = require('./api/soundtracks.json');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

const tracks = soundtrack;

app.use(cors(corsOptions));

app.get('/soundtrack', (req, res) => {
  res.json(tracks);
});

app.get('/soundtrack/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const track = tracks.find(track => track.id === id);
  if (track) {
    res.json(track);
  } else {
    res.status(404).json({ error: 'Trilha sonora não encontrada.' });
  }
});

app.use((req, res, next) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});
