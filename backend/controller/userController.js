const pool = require('../db/db');

// Create a new user
async function createUser(req, res) {
    const { name, email, age } = req.body;

    try {
        // so this pool.query is a way to entract postgresql using sql query with node js. Here we are inserting name, email and age to name,email,age
        // in users table and RETURNING * will return the data back from db when inserted , reason is we will get auto increment id of it which can be
        // helpfull 
        const result = await pool.query('INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *', [name, email, age]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

// Get all users
async function getAllUsers(req, res) {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.status(200).json(result.rows); // Send all users
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

// Update a user
async function updateUser(req, res) {
    const { id } = req.params;
    const { name, email, age } = req.body;

    try {
        const result = await pool.query('UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *', [name, email, age, id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(result.rows[0]); // Send the updated user
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

// Delete a user
async function deleteUser(req, res) {
    const { id } = req.params;

    try {
        const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
};
