const Payment = require('./models/Payment');

app.post('/api/payment/verify', async (req, res) => {
  const { paymentId, orderId, signature, policy, userId } = req.body;

  const generatedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_SECRET)
    .update(orderId + '|' + paymentId)
    .digest('hex');

  if (generatedSignature === signature) {
    // Save in DB
    const paymentRecord = new Payment({
      userId,
      policyName: policy.policyName,
      insurer: policy.insurer,
      coverageAmount: policy.coverageAmount,
      premium: policy.premium,
      paymentId,
      orderId,
      signature,
    });

    await paymentRecord.save();
    return res.json({ success: true });
  } else {
    return res.status(400).json({ success: false, message: 'Invalid signature' });
  }
});
