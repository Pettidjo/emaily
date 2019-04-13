const keys = require('../config/keys');
// const stripe = require('stripe')(keys.stripeSecretKey);
const stripe = require('stripe')('sk_test_sVhQ46pU7ptS95dfDjObvfsx');
const express= require('express');
const router = express.Router();

router.post('/api/stripe', (req, res) => {
  console.log('coucou')
  console.log(req.body)
  // const charge = stripe.charges.create({
  //   amount: 500,
  //   currency: 'usd',
  //   description: '5$ for 5 credits',
  //   source: req.body.id
  // })
});

module.exports = router;