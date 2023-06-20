import { DB_NAME, DB_PASSWORD, DB_PORT, DB_URL, DB_USER } from '../const/env';
import { Pool } from 'pg';

export const DB_DATA = new Pool({
  user: DB_USER,
  host: DB_URL,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
})