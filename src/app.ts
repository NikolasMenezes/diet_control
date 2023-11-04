require('dotenv').config();

import express from 'express'

const app = express();

import router from './router'

app.use(express.json())
app.use('/api', router)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})