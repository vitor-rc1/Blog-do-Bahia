const { Pool } = require('pg');
const { dbAcess } = require('./dbAcess');

const pool = new Pool(dbAcess);

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
  indexText text,
  mapcheckbox boolean DEFAULT false
  )
`
pool.query(
  querySection,
  (error) => {
    console.log(error)
  }
)

// create Map
const queryMap = `
CREATE TABLE IF NOT EXISTS map(
  id SERIAL PRIMARY KEY, 
  mapPositions jsonb
  );

INSERT INTO map(id, mapPositions)
VALUES(1, '[]')
ON CONFLICT (id)
DO NOTHING;
`
pool.query(
  queryMap,
  (error) => {
    console.log(error)
  }
);

module.exports = { pool }