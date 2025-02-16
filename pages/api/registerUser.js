// pages/api/register.js
import mariadb from 'mariadb';

let pool = mariadb.createPool({
    host: '85.192.30.147',
    user: 'user',
    password: 'hackAton2025',
    database: 'kpoo',
    connectionLimit: 20,  // Increase the number of connections allowed in the pool
    idleTimeout: 30000,   // Adjust idle timeout (in milliseconds)
    connectTimeout: 10000, // Connection timeout (in milliseconds)
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Destructure data from the request body
        const body = req.body;

        if (!body.fio || !body.phoneNumber || !body.email || !body.password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        try {
            // Get a connection from the pool
            const conn = await pool.getConnection();

            // Insert the data into the database (use parameterized queries to avoid SQL injection)
            const query = `
        INSERT INTO users (fio, number, email, password) 
        VALUES (?, ?, ?, ?)
      `;
            await conn.query(query, [body.fio, body.phoneNumber, body.email, body.password]);

            // Release the connection
            await conn.release();

            // Send success response
            return res.status(200).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Database error, could not register user' });
        }
    } else {
        // Handle any non-POST requests
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
