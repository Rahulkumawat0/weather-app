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
   - **Name:** `OPENWEATHER_API_KEY`
   - **Value:** Your actual OpenWeatherMap API key (get it from https://openweathermap.org/api)
   - **Select environments:** Production, Preview, Development (all checked)
3. Click **"Add"**

### Important: How the App Uses the Environment Variable

The app now uses a **Vercel Function** (`/api/config.js`) to securely provide the API key:

1. **Frontend** calls `/api/config` when the page loads
2. **Backend Function** reads `OPENWEATHER_API_KEY` from environment
3. **API key is returned** safely to the frontend (never exposed in HTML)
4. **Frontend** uses the key to call OpenWeatherMap API

This is **much more secure** than storing the key in client-side code!

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

### "Invalid API key" Error

This error means the backend couldn't find or use the API key. Fix it:

1. **In Vercel Dashboard:**
   - Go to **Settings → Environment Variables**
   - Add: `OPENWEATHER_API_KEY` = `your_key_here`
   - Save and close

2. **Redeploy:**
   - Go to **Deployments**
   - Click the 3 dots next to your latest deployment
   - Select **Redeploy**
   - Wait for it to complete

3. **Verify your API key:**
   - Go to [openweathermap.org](https://openweathermap.org)
   - Sign in
   - Check your API key is active
   - Copy it exactly (no spaces)

4. **Test:**
   - Refresh your deployed app
   - Try searching for a city
   - If still failing, check DevTools → Console for error messages

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

## 🔐 Security Architecture

This app uses a **secure backend endpoint** to manage API keys:

### File Structure:
```
weather-app/
├── api/
│   └── config.js          ← Vercel Function (serverless backend)
├── app.js                 ← Frontend JavaScript
├── index.html             ← Frontend HTML
└── ...
```

### How It Works:

1. **User visits the app** → HTML loads → `app.js` runs
2. **`app.js` calls `/api/config`** → Vercel Function responds
3. **Backend function** reads `OPENWEATHER_API_KEY` from environment
4. **API key is sent** to frontend (it's already on Vercel's servers)
5. **Frontend** uses key to fetch weather data from OpenWeatherMap

### Benefits:

✅ API key is **never exposed** in HTML/CSS/JS files  
✅ API key is **never committed** to Git  
✅ API key is **secure** on Vercel's servers  
✅ Only **one copy** of the key (no duplicates)  
✅ **Easy to rotate** - just update environment variable  

---

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **OpenWeatherMap Docs:** https://openweathermap.org/api
- **GitHub Pages Deploy:** https://pages.github.com (alternative)
