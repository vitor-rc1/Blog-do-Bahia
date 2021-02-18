const { pool } = require('../../models/connection');

module.exports = (req, res) => {
  const response = { section: {}, posts: [] };
  pool.query(`SELECT * FROM sections WHERE id=${req.params.id}`, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(result);
    res.send(result.rows)
  })
}