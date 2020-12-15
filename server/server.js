const express = require('express');
var cors = require('cors');

const app = express();
const port = 3001;

const { Client } = require('pg')

app.use(express.json())
app.use(cors())

app.post('/create', (req, res) => {
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