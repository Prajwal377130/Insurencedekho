const mongoose = require('mongoose');

const investmentInsuranceSchema = new mongoose.Schema({
  policyName: { type: String, required: true },
  insurer: { type: String, required: true },
  investmentAmount: { type: Number, required: true },
  expectedReturns: { type: String },
  tenureYears: { type: Number, required: true },
  features: [String],
  fundOptions: [String],
  lockInPeriod: { type: String },
  riskLevel: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('InvestmentInsurance', investmentInsuranceSchema);
