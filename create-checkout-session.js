// api/create-checkout-session.js
// Vercel Serverless Function — handles Stripe Checkout session creation
// Deploy this file to Vercel and it auto-becomes an API endpoint

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { priceId, email, name, trialDays = 14 } = req.body;

    if (!priceId || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create or retrieve customer
    let customer;
    const existingCustomers = await stripe.customers.list({ email, limit: 1 });
    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await stripe.customers.create({ email, name });
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      subscription_data: {
        trial_period_days: trialDays,
      },
      success_url: `${process.env.BASE_URL}/pricing.html?success=true&email=${encodeURIComponent(email)}`,
      cancel_url: `${process.env.BASE_URL}/pricing.html?cancelled=true`,
      customer_email: customer.id ? undefined : email,
      metadata: {
        source: 'focusflow_web',
        plan: priceId,
      },
      allow_promotion_codes: true,
    });

    return res.status(200).json({
      sessionId: session.id,
      url: session.url
    });

  } catch (error) {
    console.error('Stripe error:', error);
    return res.status(500).json({ error: error.message });
  }
};
