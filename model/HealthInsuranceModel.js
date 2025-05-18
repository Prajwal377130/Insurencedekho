const mongoose = require('mongoose');

const healthInsuranceSchema = new mongoose.Schema({

  policyName: { type: String, required: true },
  insurer: { type: String, required: true },
  coverageAmount: { type: Number, required: true },
  premium: { type: Number, required: true },
  tenureYears: { type: Number, required: true },
  features: [String],
  networkHospitals: { type: Number, required: true },
  waitingPeriod: { type: String },
  ageLimit: { type: String },
  createdAt: { type: Date, default: Date.now }
  
});

module.exports = mongoose.model('HealthInsurance', healthInsuranceSchema);
