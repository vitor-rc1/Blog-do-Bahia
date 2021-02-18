const { pool } = require('../models/connection');

module.exports = async (email) => {
  const admin =  await pool.query(`SELECT * FROM admin WHERE email='${email}'`)
  return admin.rows[0];
}