const express = require('express');
const router = express.Router();
const {
  addPolicy,
  getAllPolicies,
  getFilteredPolicies,
  savePolicies
} = require('../controllers/CarInsuranceController');

// POST for adding new policies (useful for admin/initial data)
router.post('/add', addPolicy);

// GET all policies
router.get('/getall', getAllPolicies);

// GET filtered policies
router.get('/filter', getFilteredPolicies);


router.post('/save', savePolicies);

module.exports = router;
