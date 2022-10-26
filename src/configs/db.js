const Pool = require('pg').Pool
require('dotenv').config()
const pool = new Pool({
  user: 'postgre',
  host: 'localhost',
  port: process.env.DB_PORT,
  database: 'todo-app'
})

module.exports = pool
