// models/Payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  authId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  policyName: String,
  insurer: String,
  coverageAmount: Number,
  premium: Number,
  paymentId: String,
  amount:Number,
  orderId: String,
  signature: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', paymentSchema);
