const mariadb = require("mariadb");
const {retry} = require("next/dist/compiled/@next/font/dist/google/retry");
const pool = mariadb.createPool({host:"85.192.30.147", port:3306, user:"user", password:"hackAton2025", database:"kpoo", connectionLimit:50})

async function registerUser({username, password}) {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("select * from `users` where username = ?", [username])
        if (rows) {
            return false;
        }

        const res = await conn.query("insert into `users`() values (?,?)", []);
        if (res)
            return true;
    }
    finally {
        if (conn) await conn.release();
    }
}