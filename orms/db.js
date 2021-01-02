const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://edykaabypalnwu:0ba74b1e0b99d45ece1cac26cf609b0c0c183fa93dcc2bafb7e8bac9892ee8ba@ec2-52-201-55-4.compute-1.amazonaws.com:5432/d1p06dj1osqd4l',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}