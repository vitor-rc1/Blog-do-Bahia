const { pool } = require('../../models/connection');

module.exports =  (req, res) => {
  pool.query(`DELETE FROM posts WHERE id=${req.params.id}`, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    res.send("Delete successful")
  })
}