const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'teste',
  password: 'hdq001@@',
  port: 5432,
});

// create table posts
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
  section integer, 
  postItems jsonb
  )
`
pool.query(postQuery
  , (error) => {
    console.log(error);
  })

// create table sections
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

module.exports = { pool }