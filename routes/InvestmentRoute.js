const express = require('express');
const router = express.Router();
const InvestmentInsuranceController = require('../controllers/InvestmentController');

router.post('/create', InvestmentInsuranceController.createPolicy);
router.get('/getall', InvestmentInsuranceController.getAllPolicies);
router.get('/getid/:id', InvestmentInsuranceController.getPolicyById);
router.put('/update/:id', InvestmentInsuranceController.updatePolicy);
router.delete('/delete/:id', InvestmentInsuranceController.deletePolicy);

module.exports = router;
