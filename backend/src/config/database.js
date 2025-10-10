import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

pool.on('connect', () => {
    console.log('✅ Conectado a la base de datos PostgreSQL');
});

pool.on('error', (err) => {
    console.error('❌ Error inesperado en la base de datos:', err);
    process.exit(-1);
});

// Test connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('❌ Error al conectar con la base de datos:', err);
    } else {
        console.log('✅ Base de datos verificada:', res.rows[0].now);
    }
});

export default pool;