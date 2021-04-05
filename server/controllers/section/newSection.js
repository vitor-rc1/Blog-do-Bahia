const { pool } = require('../../models/connection');

module.exports = (req, res) => {
  const { title, img, colorSection, colorNavFooter, about, indexText, mapCheckbox } = req.body

  pool.query(`INSERT INTO sections(title, img, colorSection, colorNavFooter, about, indexText, mapCheckbox) 
  VALUES('${title}', '${img}', '${colorSection}', '${colorNavFooter}','${about}', '${indexText}', ${mapCheckbox})`, (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log('Data insert successful');
  })
  res.send("Data insert successful")
}