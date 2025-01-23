import express from 'express'
import userModel from '../module/Usermodule.js';
const userRouter = express.Router();

// Register User
userRouter.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    // const user = new user({
    //   name,
    //   email,
    //   phone,
    //   password, // Store password as plain text (not recommended for production!)
    // });

    // await user.save();
    await userModel.create(req.body)
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login User
userRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists and password matches
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Send a simple success response with user ID
    res.json({ token: user._id });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default userRouter
