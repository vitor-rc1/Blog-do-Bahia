const { pool } = require('../../models/connection');

module.exports = (req, res) => {
  pool.query(`SELECT * FROM map WHERE id=1`, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(result);
    res.send(result.rows)
  })
}