# Weather Dashboard App

A simple, responsive weather dashboard application that displays current weather conditions and forecasts for any city.

**🌐 Live Demo:** [https://weather-app-hjn5.vercel.app/](https://weather-app-hjn5.vercel.app/)

## ✨ Features

- 🔍 City search functionality
- 🌡️ Current weather conditions (temperature, feels like)
- 💨 Wind speed and humidity display
- ⛅ Weather icons and conditions
- 📱 Responsive design with Tailwind CSS
- 🎨 Clean, modern UI

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
```bash
# Using Python
python -m http.server 8000
```
Then visit `http://localhost:8000`

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for Vercel or Netlify.

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS** - Styling with Tailwind CSS
- **JavaScript (Vanilla)** - Logic
- **OpenWeatherMap API** - Weather data
- **Vercel** - Deployment

## 📄 License

MIT License - feel free to use for personal or commercial projects

## 🔗 Links

- **Live Demo:** https://weather-app-hjn5.vercel.app/
- **GitHub:** https://github.com/Rahulkumawat0/weather-app
- **Author:** [Rahulkumawat0](https://github.com/Rahulkumawat0)
