const { pool } = require('../../models/connection');

module.exports = (req, res) => {
  const {
    cardText,
    cardImg,
    cardColor,
    cardImgWidth,
    cardTextColor,
    cardTitle,
    colorPage,
    colorNavFooter,
    title,
    titleColor,
    section,
    postItems
  } = req.body;
  const post = { postItems };
  const queryInsert = `
  INSERT INTO posts (
    cardText,
    cardImg,
    cardColor,
    cardImgWidth,
    cardTextColor,
    cardTitle,
    colorPage,
    colorNavFooter,
    title,
    titleColor,
    section,
    postItems
  ) VALUES(
    '${cardText}',
    '${cardImg}',
    '${cardColor}',
    '${cardImgWidth}',
    '${cardTextColor}',
    '${cardTitle}',
    '${colorPage}',
    '${colorNavFooter}',
    '${title}',
    '${titleColor}',
    ${section},
    '${JSON.stringify(post)}'
  )
  `
  pool.query(queryInsert, (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log('Data insert successful!!');
  })
  res.send("Data insert successful")
}