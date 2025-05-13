const {Pool} = require('pg')

// Setup the PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',      // replace with your database username
  host: 'localhost',     // or your host if remote
  database: 'practice_db',  // the database name
  password: 'newpassword',   // replace with your password
  port: 5432,            // default PostgreSQL port
});

module.exports = pool;

