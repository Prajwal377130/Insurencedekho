const express = require('express');
const router = express.Router();
const BikeInsuranceController = require('../controllers/BikeInsuranceController');

router.post('/create', BikeInsuranceController.createPolicy);
router.get('/getall', BikeInsuranceController.getAllPolicies);
router.get('/getid', BikeInsuranceController.getPolicyById);
router.put('/update', BikeInsuranceController.updatePolicy);
router.delete('/delete', BikeInsuranceController.deletePolicy);

module.exports = router;
