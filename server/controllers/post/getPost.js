const { pool } = require('../../models/connection');

module.exports = (req, res) => {
  const response = { section: {}, post: {} }
  pool.query(`SELECT * FROM posts WHERE id=${req.params.id}`, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    const [postResult] = result.rows;
    response.post = postResult;

    pool.query(`SELECT * FROM sections WHERE title='${response.post.section}'`, (error, result) => {
      if (error) {
        console.error(error);
        return;
      }
      const [sectionResult] = result.rows;
      response.section = sectionResult;

      res.send(response);
    })
  })
}