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
  const queryUpdate = `
  UPDATE posts
  SET 
    cardText = '${cardText}',
    cardImg = '${cardImg}',
    cardColor = '${cardColor}',
    cardImgWidth = '${cardImgWidth}',
    cardTextColor = '${cardTextColor}',
    cardTitle = '${cardTitle}',
    colorPage = '${colorPage}',
    colorNavFooter = '${colorNavFooter}',
    title = '${title}',
    titleColor = '${titleColor}',
    section = ${section},
    postItems = '${JSON.stringify(post)}'
  
  WHERE id=${req.params.id}
  `
  pool.query(queryUpdate, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    res.send("Update successful")
  })
}