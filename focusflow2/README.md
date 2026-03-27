# FocusFlow v2 — Complete Publishing Guide

## 📁 Files in this ZIP

```
focusflow2/
├── index.html         ← Landing page (converts visitors to paid users)
├── app.html           ← Full app (habits, timer, calendar, AI coach, profile, analytics)
├── pricing.html       ← Stripe checkout page (keys configurable in-browser)
├── api/
│   └── create-checkout-session.js  ← Vercel serverless function for payments
├── vercel.json        ← Vercel deployment config
├── package.json       ← Node dependencies (Stripe SDK)
└── README.md          ← This file
```

---

## 🚀 STEP 1 — Deploy to Vercel (5 min, free)

1. Go to https://vercel.com → Sign Up (use GitHub)
2. Click "Add New Project" → "Upload"
3. Drag this entire focusflow2 folder onto the upload area
4. Click Deploy → wait 60 seconds
5. You get a live URL like: focusflow2-abc123.vercel.app ✅

---

## 💳 STEP 2 — Create Stripe Account (5 min, free)

1. Go to https://stripe.com → Start now
2. Sign up → verify email → complete profile
3. Stay in TEST MODE (toggle top-left) until ready for real payments
4. Go to Developers → API Keys → copy your Publishable key (pk_test_...)

---

## 📦 STEP 3 — Create Products in Stripe (3 min)

Product 1 — Monthly:
- Name: FocusFlow Pro Monthly
- Price: $7.00 / month / recurring
- Save → copy Price ID (price_1ABC...)

Product 2 — Annual:
- Name: FocusFlow Pro Annual  
- Price: $49.00 / year / recurring
- Save → copy Price ID (price_1DEF...)

---

## 🔑 STEP 4 — Add Secret Key to Vercel (2 min)

In Vercel → your project → Settings → Environment Variables:

| Key                | Value                                         |
|--------------------|-----------------------------------------------|
| STRIPE_SECRET_KEY  | sk_test_... (from Stripe → Developers → API Keys) |
| BASE_URL           | https://your-vercel-url.vercel.app            |

Click Save → Deployments → Redeploy

---

## ⚙️ STEP 5 — Configure Pricing Page (1 min)

Open your live site → /pricing.html
You'll see the "Developer Setup" panel at the top. Enter:
- Stripe Publishable Key: pk_test_...
- Monthly Price ID: price_1ABC...
- Annual Price ID: price_1DEF...
- Backend URL: https://your-vercel-url.vercel.app/api/create-checkout-session

Click "Save & Apply Keys" → "Test Connection"

---

## ✅ STEP 6 — Test Payment

Use Stripe test card:
- Number: 4242 4242 4242 4242
- Expiry: 12/28
- CVC: 123

Check Stripe Dashboard → Payments to confirm it worked.

---

## 🌍 STEP 7 — Go Live (Real Payments)

1. In Stripe → switch to LIVE mode (top-left toggle)
2. Complete business verification (name, address, bank account)
3. Recreate your 2 products in Live mode
4. In Vercel → update STRIPE_SECRET_KEY to sk_live_... → Redeploy
5. In pricing.html config panel → update to pk_live_... and new Price IDs

---

## 🌐 STEP 8 — Custom Domain (Optional, ~$12/yr)

1. Buy domain at namecheap.com (e.g. focusflow.app)
2. Vercel → Settings → Domains → add your domain
3. Copy the 2 DNS records Vercel gives you into Namecheap
4. Wait 5-30 min → live at your domain with free SSL ✅

---

## 💰 Revenue Projections

| Subscribers | Monthly Revenue |
|-------------|----------------|
| 50          | $350/mo        |
| 200         | $1,400/mo      |
| 500         | $3,500/mo      |
| 1,000       | $7,000/mo      |

Stripe takes 2.9% + 30¢ per transaction.

---

## 📣 Get First Users (Free)

- Reddit: r/productivity, r/getdisciplined, r/habittracking
- Product Hunt: launch Tuesday-Thursday
- Hacker News: "Show HN: I built a habit tracker with AI coaching"
- Twitter/X: post your own streak, tag #buildinpublic
- IndieHackers: share your journey

---

Built with focus ⚡
