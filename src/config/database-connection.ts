import { Pool } from 'pg';

export const db_pool: Pool = new Pool({
  user: 'admin_user',
  host: 'localhost',
  database: 'marketplace',
  password: '8mp7WuR9Qb',
  port: 5432,
});
