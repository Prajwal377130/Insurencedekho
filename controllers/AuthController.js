const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/UserModel');
const Admin = require('../model/AdminModel');

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, "your_jwt_secret", { expiresIn: '7d' });
};

// User Signup
exports.signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed });
    const token = generateToken(user._id, 'user');
    res.json({
      token,
      user: {
        name: user.name,
        email: user.email,
        role: 'user'
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Signup failed" });
  }
};

// User Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user._id, 'user');
    res.json({
      token,
      user: {
        name: user.name,
        email: user.email,
        role: 'user'
      }
    });
  } catch {
    res.status(500).json({ message: "Login failed" });
  }
};

// Get All Users (for Admin only)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select('-password'); // exclude password
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};


// Admin Signup
exports.signupAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const exists = await Admin.findOne({ email });
    if (exists) return res.status(400).json({ message: "Admin already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ email, password: hashed });
    const token = generateToken(admin._id, 'admin');
    res.json({
      token,
      user: {
        email: admin.email,
        role: 'admin'
      }
    });
  } catch {
    res.status(500).json({ message: "Signup failed" });
  }
};

// Admin Login
exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(admin._id, 'admin');
    res.json({
      token,
      user: {
        email: admin.email,
        role: 'admin'
      }
    });
  } catch {
    res.status(500).json({ message: "Login failed" });
  }
};
