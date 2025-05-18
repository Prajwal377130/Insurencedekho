const express = require('express');
const router = express.Router();
const HealthInsuranceController = require('../controllers/HealthInsurance');

router.post('/create', HealthInsuranceController.createPolicy);
router.get('/getall', HealthInsuranceController.getAllPolicies);
router.get('/getid/:id', HealthInsuranceController.getPolicyById);
router.put('/update/:id', HealthInsuranceController.updatePolicy);
router.delete('/delete/:id', HealthInsuranceController.deletePolicy);

module.exports = router;
