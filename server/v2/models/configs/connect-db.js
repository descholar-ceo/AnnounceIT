/* eslint-disable no-undef */
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, NODE_ENV, DATABASE_URL} = process.env;

let connect;
    if (NODE_ENV === 'production') {
        connect = new Pool({
            connectionString: DATABASE_URL,
            ssl: true
        });
    } else{
        connect = new Pool({
            user: DB_USER,
            host: DB_HOST,
            database: DB_NAME,
            password: DB_PASSWORD,
            port: DB_PORT,
        });
    }

export default connect;