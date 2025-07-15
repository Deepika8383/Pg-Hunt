// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import { createUser, findUserByEmail } from '../models/UserModel.js';

// const JWT_SECRET = process.env.JWT_SECRET;

// export const signup = async (req, res) => {
//     const { name, email, password, phone, gender, college_name } = req.body;
  
//     try {
//       const existingUser = await findUserByEmail(email);
//       if (existingUser) return res.status(400).json({ error: 'User already exists' });
  
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const user = await createUser(name, email, hashedPassword, phone, gender, college_name);
  
//       res.status(201).json({ message: 'User created', user });
//     } catch (err) {
//       console.error('Signup Error:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   };

// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await findUserByEmail(email);
//     if (!user) return res.status(404).json({ error: 'User not found' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

//     const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
//     res.json({ message: 'Login successful', token });
//   } catch (err) {
//     console.error('Login Error:', err);
//     res.status(500).json({ error: 'Login failed' });
//   }
// };
// AuthController.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { findUserByEmail, createUser } from '../models/UserModel.js';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

// SIGNUP
export const signup = async (req, res) => {
  const { name, email, password, phone, gender, college_name } = req.body;

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) return res.status(400).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(name, email, hashedPassword, phone, gender, college_name);

    res.status(201).json({ message: 'User created', user });
  } catch (err) {
    console.error('Signup Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ error: 'Login failed' });
  }
};
