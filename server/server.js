const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

app.post('/crete', (req, res) => {
  console.log(req.body)
  res.send("Foi")
})

app.listen(port, () => {
  console.log("Ta rodando o menino")
})