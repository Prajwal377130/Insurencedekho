const HealthInsurance = require('../model/HealthInsuranceModel');

// Create new policy
exports.createPolicy = async (req, res) => {
  try {
    const newPolicy = new HealthInsurance(req.body);
    const savedPolicy = await newPolicy.save();
    res.status(201).json(savedPolicy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all policies
exports.getAllPolicies = async (req, res) => {
  try {
    const policies = await HealthInsurance.find();
    res.status(200).json(policies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get policy by ID
exports.getPolicyById = async (req, res) => {
  try {
    const policy = await HealthInsurance.findById(req.params.id);
    if (!policy) return res.status(404).json({ message: 'Policy not found' });
    res.status(200).json(policy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update policy
exports.updatePolicy = async (req, res) => {
  try {
    const updated = await HealthInsurance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete policy
exports.deletePolicy = async (req, res) => {
  try {
    await HealthInsurance.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Policy deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
