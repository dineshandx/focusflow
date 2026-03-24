# FocusFlow — Complete Deployment Guide
## Live in 20 minutes. Earning passive income from day one.

---

## 📁 What's in this folder

```
focusflow/
├── index.html          ← Landing page (converts visitors to paid users)
├── app.html            ← Full app (habits + timer + AI insights)
├── pricing.html        ← Stripe checkout page
├── api/
│   └── create-checkout-session.js  ← Serverless function (handles payments)
├── vercel.json         ← Deployment config
├── package.json        ← Dependencies
└── README.md           ← This file
```

---

## 🚀 STEP 1: Create a Vercel Account (Free, 3 min)

1. Go to **https://vercel.com** → click "Sign Up"
2. Sign up with GitHub (easiest) or email
3. Done. Free tier is more than enough to start.

---

## 🚀 STEP 2: Create a Stripe Account (Free, 5 min)

1. Go to **https://stripe.com** → click "Start now"
2. Fill in your email, name, and password
3. Verify your email
4. Complete your business profile (can be individual/sole proprietor)
5. Add your bank account for payouts

> **Important**: Start in TEST mode (toggle in top-left of Stripe dashboard). Switch to LIVE mode only when ready to accept real payments.

---

## 🚀 STEP 3: Create Your Stripe Products (3 min)

1. In Stripe dashboard → **Products** → **Add product**
2. Create **Product 1 — FocusFlow Pro Monthly**:
   - Name: `FocusFlow Pro`
   - Pricing: `$7.00` / month / recurring
   - Click **Save product**
   - Copy the **Price ID** (looks like `price_1ABC...`)
   
3. Create **Product 2 — FocusFlow Pro Annual**:
   - Name: `FocusFlow Pro Annual`
   - Pricing: `$49.00` / year / recurring
   - Click **Save product**
   - Copy the **Price ID**

---

## 🚀 STEP 4: Configure Your Keys

### In `pricing.html` — find these lines and replace:

```javascript
const STRIPE_PUBLISHABLE_KEY = 'pk_test_YOUR_PUBLISHABLE_KEY_HERE';
// Replace with your key from: Stripe Dashboard → Developers → API keys → Publishable key

const PRICE_IDS = {
  monthly: 'price_MONTHLY_PRICE_ID',   // Replace with your monthly Price ID
  annual: 'price_ANNUAL_PRICE_ID',     // Replace with your annual Price ID
};
```

**Where to find your Stripe keys:**
- Go to Stripe Dashboard → **Developers** → **API keys**
- Copy the **Publishable key** (starts with `pk_test_` or `pk_live_`)

---

## 🚀 STEP 5: Deploy to Vercel (5 min)

### Option A: Drag & Drop (easiest)
1. Go to **https://vercel.com/new**
2. Click **"Upload"** and drag your entire `focusflow` folder
3. Click **Deploy**
4. Done! You get a URL like `focusflow-abc123.vercel.app`

### Option B: GitHub (recommended for updates)
1. Create a new GitHub repo at **https://github.com/new**
2. Upload all files from this folder to the repo
3. Go to Vercel → **New Project** → Import your GitHub repo
4. Click **Deploy**
5. Every time you push to GitHub, Vercel auto-redeploys

---

## 🚀 STEP 6: Set Environment Variables in Vercel (2 min)

1. In Vercel, go to your project → **Settings** → **Environment Variables**
2. Add these variables:

| Key | Value |
|-----|-------|
| `STRIPE_SECRET_KEY` | Your Stripe secret key (from Stripe → Developers → API keys → Secret key, starts with `sk_test_`) |
| `BASE_URL` | Your Vercel URL, e.g. `https://focusflow-abc123.vercel.app` |

3. Click **Save** → then **Redeploy** your project

---

## 🚀 STEP 7: Add a Custom Domain (Optional but recommended)

1. Buy a domain at **Namecheap.com** or **Cloudflare.com** (~$10-15/year)
   - Suggestions: `focusflow.io`, `getfocusflow.com`, `myfocusflow.app`
2. In Vercel → Settings → **Domains** → Add your domain
3. Follow DNS instructions (copy 2 nameservers to your domain registrar)
4. SSL certificate is automatic and free ✅

---

## 🚀 STEP 8: Go Live with Real Payments

1. In Stripe dashboard → toggle from **Test** to **Live** mode
2. Replace your test keys with live keys (same steps as above):
   - `pk_test_...` → `pk_live_...` (in pricing.html)
   - `sk_test_...` → `sk_live_...` (in Vercel env variables)
3. Redeploy on Vercel

---

## 💰 Revenue Projections

| Users | Monthly Revenue | Annual Revenue |
|-------|----------------|----------------|
| 50 subscribers | $350/mo | $4,200/yr |
| 200 subscribers | $1,400/mo | $16,800/yr |
| 500 subscribers | $3,500/mo | $42,000/yr |
| 1,000 subscribers | $7,000/mo | $84,000/yr |

**Stripe takes 2.9% + 30¢ per transaction** — the rest is yours.

---

## 📣 How to Get Your First 100 Users (Free)

1. **Reddit**: Post in r/productivity, r/habittracking, r/getdisciplined
   - "I built a free habit tracker + focus timer, would love feedback"
   - Be genuine, not salesy
   
2. **Product Hunt**: Launch on producthunt.com (free)
   - Schedule for Tuesday-Thursday for best visibility
   
3. **Twitter/X**: Post your streak screenshots, tag #productivity #buildinpublic
   
4. **Hacker News**: Post in "Show HN" thread
   
5. **IndieHackers**: Share your journey at indiehackers.com

---

## 🔧 Customization

**Change the app name**: Search/replace "FocusFlow" across all files

**Change pricing**: Update `$7` and `$49` in `index.html` and `pricing.html`

**Add your own habits**: Edit the `HABITS` array in `app.html`:
```javascript
const HABITS = [
  {id:1, icon:'💧', name:'Drink Water', target:8, unit:'glasses', color:'#4FC3F7'},
  // Add more here...
];
```

**Change colors**: Edit CSS variables at the top of each file:
```css
:root {
  --accent: #E8FF47;  /* Yellow-green highlight */
  --accent2: #FF6B47; /* Orange highlight */
}
```

---

## 🛠 Tech Stack (No backend server needed!)

- **Frontend**: Vanilla HTML/CSS/JS — works everywhere, loads instantly
- **Payments**: Stripe Checkout — PCI compliant, handles everything
- **API**: Vercel Serverless Functions — runs on demand, free tier = 100k req/month
- **AI**: Claude API — powers the AI insights feature
- **Hosting**: Vercel — free CDN, SSL, global edge network

**Monthly running costs at scale:**
- Vercel: $0 (free tier handles 100k visits/month) → $20/mo for more
- Stripe: 2.9% + 30¢ per transaction
- Domain: ~$1/month
- Claude API: ~$0.10 per user per month (AI insights)

**Total cost for first 100 users: ~$3-5/month**

---

## ❓ Need Help?

- Stripe docs: https://stripe.com/docs/checkout/quickstart
- Vercel docs: https://vercel.com/docs
- Email: [your email here]

---

*Built with ❤️ and focus. Good luck! 🚀*
