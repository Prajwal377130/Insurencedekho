const CarInsurancePolicy = require('../model/CarInsuranceModel');

// Create a new policy
exports.createPolicy = async (req, res) => {
  try {
    const policy = new CarInsurancePolicy(req.body);
    const savedPolicy = await policy.save();
    res.status(201).json(savedPolicy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all policies
exports.getAllPolicies = async (req, res) => {
  try {
    const policies = await CarInsurancePolicy.find();
    res.json(policies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get policy by ID
exports.getPolicyById = async (req, res) => {
  try {
    const policy = await CarInsurancePolicy.findById(req.params.id);
    if (!policy) return res.status(404).json({ message: "Policy not found" });
    res.json(policy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update policy
exports.updatePolicy = async (req, res) => {
  try {
    const updatedPolicy = await CarInsurancePolicy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPolicy) return res.status(404).json({ message: "Policy not found" });
    res.json(updatedPolicy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete policy
exports.deletePolicy = async (req, res) => {
  try {
    const deletedPolicy = await CarInsurancePolicy.findByIdAndDelete(req.params.id);
    if (!deletedPolicy) return res.status(404).json({ message: "Policy not found" });
    res.json({ message: "Policy deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
