const mariadb = require("mariadb");
const pool = mariadb.createPool({host:"85.192.30.147", port:3306, user:"user", password:"hackAton2025", database:"kpoo", connectionLimit:50})

async function registerUser({fio, number, email, password}) {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("select * from `users` where `email` = ?", [email])
        if (rows) {
            return false;
        }

        const res = await conn.query("insert into `users`(fio, email, number, password) values (?,?,?,?)", [fio, email, number, password]);
        if (res)
            return true;
    }
    finally {
        if (conn) await conn.release();
    }
}