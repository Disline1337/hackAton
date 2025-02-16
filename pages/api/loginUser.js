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
        const { emailOrPhone, password } = req.body;
        // Check if either email or phoneNumber is provided
        if (!emailOrPhone) {
            return res.status(400).json({ error: 'Email or phone number is required' });
        }

        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        try {
            // Get a connection from the pool
            const conn = await pool.getConnection();

            // Determine if we are searching by email or phone number
            const query = `
                SELECT * FROM users WHERE email = ? OR number = ?
            `;

            // Execute the query with the provided email or phone number
            const rows = await conn.query(query, [emailOrPhone, emailOrPhone]);

            // If no user is found, return an error
            if (rows.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            const user = rows[0];

            // Compare the hashed password with the provided password
            const passwordMatch = password === user.password;

            if (!passwordMatch) {
                return res.status(401).json({ error: 'Invalid password' });
            }

            // User is authenticated, you can return user info or create a session here
            return res.status(200).json({
                message: 'Login successful',
                user: {
                    id: user.id,
                    fio: user.fio,
                    email: user.email,
                    phoneNumber: user.number,
                },
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Database error, could not log in user' });
        }
    } else {
        // Handle any non-POST requests
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}

