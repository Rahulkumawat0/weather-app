# Setup Instructions

## Local Development

### 1. Clone the repository
```bash
git clone https://github.com/Rahulkumawat0/weather-app.git
cd weather-app
```

### 2. Get an API Key
1. Visit [OpenWeatherMap API](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate your free API key

### 3. Configure Local Environment
Create a `config.js` file from the template:
```bash
cp config.example.js config.js
```

Edit `config.js` and replace the placeholder with your actual API key:
```javascript
const CONFIG = {
  API_KEY: "your_actual_api_key_here"
};
```

### 4. Run Locally
Open `index.html` in your browser or run a local server:
```bash
# Using Python 3
python -m http.server 3000

# Or using Python 2
python -m SimpleHTTPServer 3000

# Or using Node.js (if installed)
npx http-server
```

Visit `http://localhost:3000` in your browser.

---

## Deployment to Vercel

### 1. Connect GitHub Repository
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select the `weather-app` repository
4. Click "Import"

### 2. Add Environment Variable
1. In the "Environment Variables" section, add:
   - **Name**: `OPENWEATHER_API_KEY`
   - **Value**: Your OpenWeatherMap API key
2. Click "Deploy"

### 3. Automatic Deployments
After deployment, any push to the `main` branch will automatically trigger a new deployment.

---

## Security ⚠️

- **NEVER commit `config.js` to Git** (it's in .gitignore)
- **NEVER expose API keys in code**
- Use environment variables for sensitive data
- The `config.js` file is only for local development
- In production (Vercel), API keys are stored securely as environment variables

---

## Troubleshooting

**"API key not configured" error**
- Make sure `config.js` exists locally with a valid API key
- On Vercel, ensure the `OPENWEATHER_API_KEY` environment variable is set

**"City not found"**
- Check that the OpenWeatherMap API is working
- Verify your API key has read permissions

**CORS errors**
- This is handled by OpenWeatherMap's API
- Make sure your API key is valid and active
