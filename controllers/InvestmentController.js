const InvestmentInsurance = require('../model/InvestmentModel');

// Create policy
exports.createPolicy = async (req, res) => {
  try {
    const policy = new InvestmentInsurance(req.body);
    const saved = await policy.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all policies
exports.getAllPolicies = async (req, res) => {
  try {
    const policies = await InvestmentInsurance.find();
    res.status(200).json(policies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get by ID
exports.getPolicyById = async (req, res) => {
  try {
    const policy = await InvestmentInsurance.findById(req.params.id);
    if (!policy) return res.status(404).json({ message: 'Policy not found' });
    res.status(200).json(policy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update policy
exports.updatePolicy = async (req, res) => {
  try {
    const updated = await InvestmentInsurance.findByIdAndUpdate(
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
    await InvestmentInsurance.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Policy deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
