const express = require('express');
const router = express.Router();
const {
  signupUser,
  loginUser,
  signupAdmin,
  loginAdmin,
  getAllUsers,           
} = require('../controllers/AuthController');

const { verifyAdmin } = require('../middleware/verifyAdmin');
const { verifyToken } = require('../middleware/VerifyToken');  
// User routes
router.post('/signup/user', signupUser);
router.post('/login/user', loginUser);

// Admin routes
router.post('/signup/admin', signupAdmin);
router.post('/login/admin', loginAdmin);


router.get('/getall', verifyToken, verifyAdmin, getAllUsers);

module.exports = router;
