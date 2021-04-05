const { pool } = require('../../models/connection');

module.exports = (req, res) => {
  pool.query(`SELECT * FROM sections WHERE id=${req.params.id}`, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    const section = result.rows;
    pool.query('SELECT * FROM map WHERE id=1', (error, resultMap) => {
      section[0]['map']= resultMap.rows[0];
      console.log(section)
      res.send(section);
    })
  })
}