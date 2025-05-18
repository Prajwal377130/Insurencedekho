const mongoose = require('mongoose');

const termInsuranceSchema = new mongoose.Schema({
  policyName: { type: String, required: true },
  insurer: { type: String, required: true },
  coverageAmount: { type: Number, required: true },
  premium: { type: Number, required: true },
  tenureYears: { type: Number, required: true },
  features: [String],
  maxAge: { type: Number, required: true },
  minAge: { type: Number, required: true },
  claimSettlementRatio: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TermInsurance', termInsuranceSchema);
