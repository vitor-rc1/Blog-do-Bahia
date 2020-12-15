const express = require('express');
var cors = require('cors');

const app = express();
const port = 3001;

const { Pool } = require('pg')

app.use(express.json())
app.use(cors())


const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'teste',
  password: 'hdq001@@',
  port: 5432,
})

// create table
pool.query('CREATE TABLE IF NOT EXISTS posts (id SERIAL PRIMARY KEY, post jsonb)', (error) => {
  console.log(error)
})

// create post
app.post('/create', (req, res) => {
  pool.query(`INSERT INTO posts(post) VALUES('${JSON.stringify(req.body)}')`, (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log('Data insert successful');
  })
  res.send("Data insert successful")
})

// acess all posts
app.get('/posts', (req, res) => {
  pool.query('SELECT * FROM posts', (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(result);
    res.send(result.rows)
  })
})

// acess especific post
app.get('/:id/post', (req, res) => {
  pool.query(`SELECT * FROM posts WHERE id=${req.params.id}`, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(result);
    res.send(result.rows)
  })
})

// update specific post
app.put('/:id/update', (req, res) => {
  pool.query(`UPDATE posts SET post='${JSON.stringify(req.body)}' WHERE id=${req.params.id}`, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    res.send("Update successful")
  })
})


// delete especific post
app.delete('/:id/delete', (req, res) => {
  pool.query(`DELETE FROM posts WHERE id=${req.params.id}`, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    res.send("Delete successful")
  })
})

app.listen(port, () => {
  console.log("Ta rodando o menino")
})