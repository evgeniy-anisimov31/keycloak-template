import {getNumber, getString} from '../utils/idnex'
require('dotenv').config();

// DB
export const DB_USER = getString(process.env.DB_USER)
export const DB_URL = getString(process.env.DB_URL)
export const DB_NAME = getString(process.env.DB_NAME)
export const DB_PASSWORD = getString(process.env.DB_PASSWORD)
export const DB_PORT = getNumber(process.env.DB_PORT) || 5433

// Keycloak
export const KEYCLOAK_SERVER_URL = getString(process.env.KEYCLOAK_SERVER_URL);
export const KEYCLOAK_REALM = getString(process.env.KEYCLOAK_REALM);
export const KEYCLOAK_CLIENT_ID = getString(process.env.KEYCLOAK_CLIENT_ID);
export const KEYCLOAK_CLIENT_SECRET = getString(process.env.KEYCLOAK_CLIENT_SECRET);