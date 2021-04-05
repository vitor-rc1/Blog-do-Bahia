const { pool } = require('../../models/connection');

module.exports = (req, res) => {
  const {
    positions
  } = req.body;
  console.log(positions)
  const queryUpdate = `
  UPDATE map
  SET 
    mapPositions = '${JSON.stringify(positions)}'
  WHERE id=1
  `
  pool.query(queryUpdate, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    res.send("Update successful")
  })
}