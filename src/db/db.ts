import { Pool } from 'pg';

export const DB_DATA = new Pool({
  user: 'evgenii',
  host: 'localhost',
  database: 'evgenii',
  password: '',
  port: 5433,
})