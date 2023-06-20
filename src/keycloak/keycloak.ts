import Keycloak from 'keycloak-connect';
import session from 'express-session';
import {KEYCLOAK_CLIENT_ID, KEYCLOAK_CLIENT_SECRET, KEYCLOAK_REALM, KEYCLOAK_SERVER_URL } from '../const/env';

const kcConfig = {
    'auth-server-url': KEYCLOAK_SERVER_URL,
    realm: KEYCLOAK_REALM,
    resource: KEYCLOAK_CLIENT_ID,
    'ssl-required': 'external',
    'verify-token-audience': true,
    credentials: {
        secret: KEYCLOAK_CLIENT_SECRET,
    },
    'confidential-port': 0,
    'policy-enforcer': {},
};

export const memoryStore = new session.MemoryStore();
export const keycloak = new Keycloak({ store: memoryStore }, kcConfig);