const express = require('express')
const cors = require('cors')
const app = express()
const soundtrack = require('./api/soundtracks.json')

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};

app.get('/soundtrack', (req, res) => {
    res.json(soundtrack)
})

app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.status(404).json({ error: 'Rota não encontrada' })
})

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000')
})