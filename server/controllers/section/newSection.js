const { pool } = require('../../models/connection');

module.exports = (req, res) => {
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
}