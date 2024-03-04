import { Pool } from 'pg';

const pool = new Pool({
    user: 'admin_user',
    host: 'localhost',
    database: 'marketplace',
    password: '8mp7WuR9Qb',
    port: 5432,
  });

  module.exports = pool;