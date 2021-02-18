const { pool } = require('../../models/connection');

module.exports = (req, res) => {
  pool.query('SELECT id, title FROM sections ORDER BY id', (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(result);
    res.send(result.rows)
  })
}