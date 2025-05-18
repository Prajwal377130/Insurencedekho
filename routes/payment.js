const express = require('express');
const Razorpay = require('razorpay');
const Payment = require('../model/payment');
require('dotenv').config();

const router = express.Router();

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Create Razorpay Order
router.post('/create-order', async (req, res) => {
  const { amount } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, 
      currency: 'INR',
      receipt: `rcptid_${Math.floor(Math.random() * 10000)}`,
    });
    res.status(200).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Order creation failed' });
  }
});

// Save payment after successful transaction
router.post('/save', async (req, res) => {
  const { authId, policyName, insurer,coverageAmount,premium,paymentId,orderId } = req.body;

  try {
    const payment = new Payment({
     authId ,
  policyName,
  insurer,
  coverageAmount,
  premium,
paymentId,
  orderId,
 
    });

    await payment.save();
    res.status(201).json({ message: 'Payment saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save payment' });
  }
});

// Get all payment history for a user
router.get('/history/:authId', async (req, res) => {
  try {
    const history = await Payment.find({ authId: req.params.authId }).sort({ date: -1 });
    res.json(history);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch history' });
  }
});
// Get all payment history (Admin)
router.get('/history', async (req, res) => {
  try {
    const history = await Payment.find().populate('authId', 'name email').sort({ date: -1 });
    res.json(history);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch all payment history' });
  }
});


module.exports = router;
