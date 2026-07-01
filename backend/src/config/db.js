const { Pool } = require("pg");
require("dotenv").config();

let pool;

if (process.env.DATABASE_URL) {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
} else {
    // Fallback to individual variables if DATABASE_URL is not set
    pool = new Pool({
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 5432,
        user: process.env.DB_USER || "postgres",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "hydropulse",
        ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false
    });
}

pool.connect((err, client, release) => {
    if (err) {
        console.error("Database Connection Failed", err);
    } else {
        console.log("PostgreSQL Connected Successfully");
        release();
    }
});

// A query wrapper to emulate mysql2's pool.query(sql, params, callback)
const query = (sql, params, callback) => {
    let actualParams = params;
    let actualCallback = callback;
    
    // If params is a function, no parameters were passed
    if (typeof params === "function") {
        actualCallback = params;
        actualParams = [];
    }

    // 1. Translate MySQL parameter placeholders '?' to PostgreSQL '$1', '$2', etc.
    let paramIndex = 1;
    let pgSql = sql.replace(/\?/g, () => `$${paramIndex++}`);

    // 2. Automatically append RETURNING id for INSERT statements in PG to get the insertId
    const upperSql = pgSql.trim().toUpperCase();
    if (upperSql.startsWith("INSERT") && !upperSql.includes("RETURNING")) {
        pgSql += " RETURNING id";
    }

    pool.query(pgSql, actualParams, (err, res) => {
        if (err) {
            console.error("Database Query Error:", err);
            console.error("Query SQL:", pgSql);
            console.error("Query Params:", actualParams);
            return actualCallback(err);
        }

        // 3. Format the response to mimic mysql2's response structure
        if (upperSql.startsWith("SELECT")) {
            // mysql2 returns rows array directly for SELECT
            return actualCallback(null, res.rows);
        } else if (upperSql.startsWith("INSERT")) {
            const insertId = res.rows && res.rows[0] && res.rows[0].id ? res.rows[0].id : null;
            return actualCallback(null, {
                insertId,
                affectedRows: res.rowCount,
                warningStatus: 0
            });
        } else {
            // For UPDATE/DELETE, etc.
            return actualCallback(null, {
                affectedRows: res.rowCount,
                warningStatus: 0
            });
        }
    });
};

module.exports = {
    query,
    pool
};