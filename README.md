# Weather Dashboard App

A simple, responsive weather dashboard application that displays current weather conditions and forecasts for any city.

## ✨ Features

- 🔍 City search functionality
- 🌡️ Current weather conditions (temperature, feels like)
- 💨 Wind speed and humidity display
- ⛅ Weather icons and conditions
- 📅 7-day forecast preview
- 📱 Responsive design with Tailwind CSS
- 🎨 Clean, modern UI
- 🔒 Secure API key management

## 🚀 Quick Start (Local Development)

### Prerequisites
- A modern web browser
- Free API key from [OpenWeatherMap](https://openweathermap.org/api)

### Setup

1. **Clone the repository:**
```bash
git clone https://github.com/Rahulkumawat0/weather-app.git
cd weather-app
```

2. **Create config file:**
```bash
cp config.example.js config.js
```

3. **Add your API key to `config.js`:**
```javascript
const CONFIG = {
  API_KEY: "your_actual_api_key_here"
};
```

4. **Open in browser:**
   - Simply open `index.html` in your browser or
   - Use a local server: `python -m http.server 8000`
   - Then visit http://localhost:8000

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:** (Already done ✅)
```bash
git push origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import the GitHub repository
   - Click "Deploy"

3. **Set Environment Variable:**
   - In Vercel Dashboard → Project Settings → Environment Variables
   - Add: `OPENWEATHER_API_KEY` = `your_api_key_here`
   - Redeploy

4. **Done!** Your app is live at `https://weather-app-[your-username].vercel.app`

### Deploy to Netlify

1. **Manual Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the project folder
   - Set environment variable in Site settings

2. **Or Connect GitHub:**
   - Click "Connect to Git"
   - Select your repository
   - Add environment variable: `OPENWEATHER_API_KEY`
   - Deploy

## 📁 Project Structure

```
weather-app/
├── index.html           # Main HTML file
├── app.js              # JavaScript logic
├── config.js           # API key (local only, .gitignore'd)
├── config.example.js   # Template for config.js
├── .env.example        # Environment variable template
├── vercel.json         # Vercel deployment config
└── README.md           # This file
```

## 🔐 Security

- **API Key Protection:**
  - `config.js` is in `.gitignore` and never committed
  - For deployment, use platform-specific environment variables
  - Never expose API keys in version control

- **For Vercel/Netlify:**
  - Store `OPENWEATHER_API_KEY` in platform environment settings
  - The key is injected at runtime, not exposed publicly

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS** - Styling with Tailwind CSS
- **JavaScript (Vanilla)** - Logic
- **OpenWeatherMap API** - Weather data
- **Vercel** - Deployment (optional)
- **Netlify** - Deployment (optional)

## 📝 API Integration

Uses the [OpenWeatherMap API](https://openweathermap.org/api):
- **Free Tier:** 60 calls/minute, 1M calls/month
- **Get Key:** https://openweathermap.org/api
- **Endpoints Used:**
  - Current weather: `/weather`
  - Forecast: `/forecast/daily`

## 🤝 Contributing

Feel free to fork and submit pull requests!

## 📄 License

MIT License - feel free to use for personal or commercial projects

## 🔗 Links

- **Live Demo:** (Your deployed URL)
- **GitHub:** https://github.com/Rahulkumawat0/weather-app
- **Author:** [Rahulkumawat0](https://github.com/Rahulkumawat0)
