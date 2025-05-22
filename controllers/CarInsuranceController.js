const CarInsurance = require('../model/CarInsuranceModel');

// Add a new policy (for admin or seeding)
exports.addPolicy = async (req, res) => {
  try {
    const newPolicy = new CarInsurance(req.body);
    await newPolicy.save();
    res.status(201).json(newPolicy);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create policy' });
  }
};

// Get all policies
exports.getAllPolicies = async (req, res) => {
  try {
    const policies = await CarInsurance.find();
    res.json(policies);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch policies' });
  }
};

// Get filtered policies
exports.getFilteredPolicies = async (req, res) => {
  const { brand, model, year } = req.query;

  try {
    const filter = {};
    if (brand) filter.brand = brand;
    if (model) filter.model = model;
    if (year) filter.year = Number(year);
    // 10=>2022  20=>2025

    //fecth data 10 2025 +10 =20

    const policies = await CarInsurance.find(filter);
    res.status(200).json(policies);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch filtered policies' });
  }
};


exports.savePolicies = async (req, res) => {
  try {
    const { carNumber, carBrand, model, fuel, city, year, policyName, insurer, amount } = req.body;

    const carInsurance = new CarInsurance({
      carNumber,
      carBrand,
      model,
      fuel,
      city,
      year,
      policyName,
      insurer,
      amount
    });

    await carInsurance.save();
    res.status(201).json({ message: 'Car insurance details saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save car insurance details' });
  }
};

