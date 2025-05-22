const mongoose = require('mongoose');

const carInsuranceSchema = new mongoose.Schema({
  carNumber: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
    match: /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/, 
  },
  city:String,
  brand: String,
  model: String,
  year: Number,
  fuel:String,
  policyName: String,
  insurer: String,
 Amount: Number,
  
});

module.exports = mongoose.model('CarInsurance', carInsuranceSchema);
