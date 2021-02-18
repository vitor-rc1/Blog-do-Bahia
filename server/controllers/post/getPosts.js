const { pool } = require('../../models/connection');

module.exports = (req, res) => {
  const query = `
  SELECT id, cardtext, cardimg, cardcolor, cardimgwidth, cardtextcolor, cardtitle, section
  FROM posts
  ORDER BY id DESC
  `
  pool.query(query, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    res.send(result.rows)
  })
}