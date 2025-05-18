const mongoose = require('mongoose');

const CarInsurancePolicySchema = new mongoose.Schema({
  policyName: { type: String, required: true },
  insurer: { type: String, required: true },
  coverageAmount: { type: Number, required: true },
  premium: { type: Number, required: true },
  tenureMonths: { type: Number, required: true },
  features: [String], 
  ownDamage: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CarInsurancePolicy', CarInsurancePolicySchema);
