const express = require('express');
var cors = require('cors');

const app = express();
const port = 3002;

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
const postQuery = `
CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY, 
  cardText text, 
  cardImg text, 
  cardColor text, 
  cardImgWidth text, 
  cardTextColor text, 
  cardTitle text,
  colorPage text, 
  colorNavFooter text, 
  title text,
  titleColor text,
  section text, 
  postItems jsonb
  )
`
pool.query(postQuery
  , (error) => {
    console.log(error);
  })

//POSTS
// create post
app.post('/post/create', (req, res) => {
  console.log(req.body)
  const {
    cardText,
    cardImg,
    cardColor,
    cardImgWidth,
    cardTextColor,
    cardTitle,
    colorPage,
    colorNavFooter,
    title,
    titleColor,
    section,
    postItems
  } = req.body;
  const post = {postItems};
  const queryInsert = `
  INSERT INTO posts (
    cardText,
    cardImg,
    cardColor,
    cardImgWidth,
    cardTextColor,
    cardTitle,
    colorPage,
    colorNavFooter,
    title,
    titleColor,
    section,
    postItems
  ) VALUES(
    '${cardText}',
    '${cardImg}',
    '${cardColor}',
    '${cardImgWidth}',
    '${cardTextColor}',
    '${cardTitle}',
    '${colorPage}',
    '${colorNavFooter}',
    '${title}',
    '${titleColor}',
    '${section}',
    '${JSON.stringify(post)}'
  )
  `
  pool.query(queryInsert, (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log('Data insert successful!!');
  })
  res.send("Data insert successful")
})

// acess all posts
app.get('/posts', (req, res) => {
  const query = `
  SELECT id, cardtext, cardimg, cardcolor, cardimgwidth, cardtextcolor, cardtitle 
  FROM posts
  ORDER BY id DESC
  `
  pool.query(query, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(result);
    res.send(result.rows)
  })
})

// acess especific post
app.get('/post/load/:id', (req, res) => {
  const response = { section: {}, post: {}}
  // console.log(req.body)
  pool.query(`SELECT * FROM posts WHERE id=${req.params.id}`, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    const [ postResult ] = result.rows;
    response.post = postResult;

    pool.query(`SELECT * FROM sections WHERE title='${response.post.section}'`, (error, result) => {
      if (error) {
        console.error(error);
        return;
      }
      const [ sectionResult ] = result.rows;
      response.section = sectionResult;
  
      res.send(response);
    })
  })
})

// update specific post
app.put('/post/update/:id', (req, res) => {
  const {
    cardText,
    cardImg,
    cardColor,
    cardImgWidth,
    cardTextColor,
    cardTitle,
    colorPage,
    colorNavFooter,
    title,
    titleColor,
    section,
    postItems
  } = req.body;
  const post = {postItems};
  const queryUpdate = `
  UPDATE posts
  SET 
    cardText = '${cardText}',
    cardImg = '${cardImg}',
    cardColor = '${cardColor}',
    cardImgWidth = '${cardImgWidth}',
    cardTextColor = '${cardTextColor}',
    cardTitle = '${cardTitle}',
    colorPage = '${colorPage}',
    colorNavFooter = '${colorNavFooter}',
    title = '${title}',
    titleColor = '${titleColor}',
    section = '${section}',
    postItems = '${JSON.stringify(post)}'
  
  WHERE id=${req.params.id}
  `
  pool.query(queryUpdate, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    res.send("Update successful")
  })
})


// delete especific post
app.delete('/post/delete/:id', (req, res) => {
  pool.query(`DELETE FROM posts WHERE id=${req.params.id}`, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    res.send("Delete successful")
  })
})

//SECTIONS
const querySection = `
CREATE TABLE IF NOT EXISTS sections (
  id SERIAL PRIMARY KEY, 
  title text, 
  img text, 
  colorSection text, 
  colorNavFooter text, 
  about text, 
  indexText text
  )
`
pool.query(
  querySection,
  (error) => {
    console.log(error)
  }
)

// create section
app.post('/section/create', (req, res) => {
  console.log(req.body)

  const { title, img, colorSection, colorNavFooter, about, indexText } = req.body

  pool.query(`INSERT INTO sections(title, img, colorSection, colorNavFooter, about, indexText) 
  VALUES('${title}', '${img}', '${colorSection}', '${colorNavFooter}','${about}', '${indexText}')`, (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log('Data insert successful');
  })
  res.send("Data insert successful")
})

// acess all sections
app.get('/sections', (req, res) => {
  console.log(req.body)
  pool.query('SELECT id, title FROM sections ORDER BY id', (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(result);
    res.send(result.rows)
  })
})

// acess especific section
app.get('/section/load/:id', (req, res) => {
  pool.query(`SELECT * FROM sections WHERE id=${req.params.id}`, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(result);
    res.send(result.rows)
  })
})

// update specific section
app.put('/section/update/:id', (req, res) => {
  console.log(req.body)
  const { title, img, colorSection, colorNavFooter, about, indexText } = req.body
  pool.query(`UPDATE sections 
  SET title='${title}', 
  img='${img}', 
  colorSection='${colorSection}', 
  colorNavFooter='${colorNavFooter}', 
  about='${about}', 
  indexText='${indexText}' 
  WHERE id=${req.params.id}`, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    res.send("Update successful")
  })
})


// delete especific section
app.delete('/section/delete/:id', (req, res) => {
  console.log(req.body)
  pool.query(`DELETE FROM sections WHERE id=${req.params.id}`, (error, result) => {
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