import pool from '../Services/neon/db.js';

export const createUser = async (name, email, hashedPassword, phone, gender, college_name) => {
    const result = await pool.query(
      'INSERT INTO users (full_name, email, password, phone, gender, college_name) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, full_name, email, phone, gender, college_name',
      [name, email, hashedPassword, phone, gender, college_name]
    );
    return result.rows[0];
};

export const findUserByEmail = async (email) => {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
};
