import pg from "pg";

const db = new pg.Client({
    connectionString: process.env.DATABASE_URL,  // Railway provides a DATABASE_URL
    ssl: {
        rejectUnauthorized: false  // Needed for secure connections
    }
});

export default db;
