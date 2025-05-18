const express = require('express');
const router = express.Router();
const TermInsuranceController = require('../controllers/TermInsuranceController');

router.post('/create', TermInsuranceController.createPolicy);
router.get('/getall', TermInsuranceController.getAllPolicies);
router.get('/getid/:id', TermInsuranceController.getPolicyById);
router.put('/update/:id', TermInsuranceController.updatePolicy);
router.delete('/delete/:id', TermInsuranceController.deletePolicy);

module.exports = router;
