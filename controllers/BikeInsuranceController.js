const BikeInsurancePolicy = require('../model/BikeInsuranceModel');

// Create a new policy
exports.createPolicy = async (req, res) => {
  try {
    const policy = new BikeInsurancePolicy(req.body);
    const savedPolicy = await policy.save();
    res.status(201).json(savedPolicy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all policies
exports.getAllPolicies = async (req, res) => {
  try {
    const policies = await BikeInsurancePolicy.find();
    res.json(policies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get policy by ID
exports.getPolicyById = async (req, res) => {
  try {
    const policy = await BikeInsurancePolicy.findById(req.params.id);
    if (!policy) return res.status(404).json({ message: "Policy not found" });
    res.json(policy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update policy
exports.updatePolicy = async (req, res) => {
  try {
    const updatedPolicy = await BikeInsurancePolicy.findByIdAndUpdate(
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
    const deletedPolicy = await BikeInsurancePolicy.findByIdAndDelete(req.params.id);
    if (!deletedPolicy) return res.status(404).json({ message: "Policy not found" });
    res.json({ message: "Policy deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
