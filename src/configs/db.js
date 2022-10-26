const Pool = require('pg').Pool;
require('dotenv').config();
const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  port: process.env.DB_PORT,
  database: process.env.DATABASE
});

module.exports = pool;
