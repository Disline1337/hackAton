const mariadb = require("mariadb");
const pool = mariadb.createPool({host:"85.192.30.147", port:3306, user:"user", password:"hackAton2025", database:"kpoo", connectionLimit:50})

export async function registerUser(fio, number, email, password) {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("select * from `users` where `email` = ? or `number` = ?", [email, number])
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

export async function loginUser(data, password) {
    let conn;
    try {
        conn = await pool.getConnection();
        const res = await conn.query("select * from `users` where `email` = ? or `number` = ?", [data, data]);
        if (res){
            let user = res[0]
            return password === user.password;
        }
        else {
            return false;
        }
    }
    finally {
        if (conn) await conn.release();
    }
}

// prototype
/*export async function addHero(fio, born_date, death_date, rod_voisk, zvanie, gos_nagrads, other_nagrads,) {
    let conn;
    try {
        conn = await pool.getConnection();
        const res = await conn.query("insert into `Soldier`(fio, born_date, death_date) values (?,?,?,?)")
    }
}*/