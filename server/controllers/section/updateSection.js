const { pool } = require('../../models/connection');

module.exports = (req, res) => {
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
}