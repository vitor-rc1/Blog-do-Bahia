const express = require('express');
const app = express();
const port = 3000;

const { Client } = require('pg')

app.use(express.json())

app.post('/crete', (req, res) => {
  console.log(req.body)
  res.send("Foi")
})

const client = new Client({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'teste',
  password: 'hdq001@@',
  port: 5432,
})
client.connect()
client.query('CREATE TABLE posts (content int)', (err, res) => {
  console.log(err, res)
  client.end()
})


app.listen(port, () => {
  console.log("Ta rodando o menino")
})