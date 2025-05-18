const express = require('express');
const router = express.Router();
const CarInsuranceController = require('../controllers/CarInsuranceController');

router.post('/create', CarInsuranceController.createPolicy);
router.get('/getall', CarInsuranceController.getAllPolicies);
router.get('/getid', CarInsuranceController.getPolicyById);
router.put('/update', CarInsuranceController.updatePolicy);
router.delete('/delete', CarInsuranceController.deletePolicy);

module.exports = router;
