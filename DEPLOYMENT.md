# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Step 1: Connect Your GitHub Repository

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"New Project"**
3. Click **"Import Git Repository"**
4. Authorize Vercel to access your GitHub account
5. Search for and select **`weather-app`**
6. Click **"Import"**

### Step 2: Configure Environment Variables

1. On the "Configure Project" page, scroll to **"Environment Variables"** section
2. Add the following environment variable:
   - **Key:** `OPENWEATHER_API_KEY`
   - **Value:** `your_actual_api_key_from_openweathermap`
   - **Select environments:** Production, Preview, Development (all checked)
3. Click **"Add"**

### Step 3: Deploy

1. Click **"Deploy"**
2. Wait for the deployment to complete (usually 1-2 minutes)
3. Once done, you'll see a button showing your live URL: `https://weather-app-[your-username].vercel.app`

### Step 4: Verify Deployment

1. Open your deployed URL
2. Try searching for a city
3. If it works, you're done! ✅

---

## 🌐 Deploy to Netlify

### Option A: Connect to GitHub

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click **"Add new site" → "Connect to Git"**
3. Select **GitHub** and authorize
4. Choose the **`weather-app`** repository
5. Click **"Deploy site"**
6. Go to **Site settings → Build & deploy → Environment**
7. Add environment variable:
   - **Key:** `OPENWEATHER_API_KEY`
   - **Value:** `your_api_key_here`
8. Redeploy the site

### Option B: Manual Deploy

1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site" → "Deploy manually"**
3. Drag and drop your project folder
4. Your site will be deployed

---

## 🔐 Getting Your OpenWeatherMap API Key

1. Go to [openweathermap.org](https://openweathermap.org)
2. Click **"Sign in"** (top-right)
3. Create an account or sign in
4. Go to **API keys** section
5. You'll see a default key under "My API keys"
6. Copy this key and use it for deployment

### Free Tier Limits:
- **Calls per minute:** 60
- **Monthly calls:** 1,000,000
- **Sufficient for:** Personal projects and testing

---

## 🔄 Redeploying After Changes

### If using GitHub integration (Recommended):
1. Push changes to `main` branch:
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```
2. The deployment platform will automatically redeploy!

### Manual redeploy:
- **Vercel:** Push to GitHub or click "Redeploy" in dashboard
- **Netlify:** Push to GitHub or go to "Deploys" and click "Trigger deploy"

---

## 🐛 Troubleshooting

### "City not found" or blank results
- Check that your API key is correct
- Verify environment variable is set in deployment settings
- Make sure API key hasn't exceeded monthly quota

### Environment variable not working
- **Vercel:** Check Site Settings → Environment Variables
- **Netlify:** Check Site settings → Build & deploy → Environment
- Clear browser cache and refresh
- Redeploy after adding/changing variables

### 404 errors
- Make sure all files are pushed to GitHub
- Check that `.gitignore` is not excluding needed files
- Verify deployment uses the correct branch

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] API key obtained from OpenWeatherMap
- [ ] Deployment platform account created
- [ ] GitHub repository connected
- [ ] Environment variables configured
- [ ] Deployment completed
- [ ] Live URL tested and working
- [ ] City search verified

---

## 📊 Performance Tips

1. **Optimize API calls** - Cache results to reduce API hits
2. **Use CDN** - Vercel/Netlify provide free CDN
3. **Minify code** - Already done with Tailwind
4. **Monitor usage** - Check OpenWeatherMap dashboard for API quota

---

## 🆘 Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **OpenWeatherMap Docs:** https://openweathermap.org/api
- **GitHub Pages Deploy:** https://pages.github.com (alternative)
