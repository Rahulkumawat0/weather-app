// Get API key from environment or config (with fallback)
const API_KEY = 
  window.location.hostname === 'localhost' 
    ? CONFIG?.API_KEY || ''
    : (process.env.OPENWEATHER_API_KEY || CONFIG?.API_KEY || '');

// Validate API key before making requests
if (!API_KEY) {
  console.error('❌ ERROR: API key not configured! Configure it in config.js or set OPENWEATHER_API_KEY environment variable.');
}

// UI Elements
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const errorBar = document.getElementById("error-bar");

const cityName = document.getElementById("city-name");
const cityCountry = document.getElementById("city-country");
const cityDate = document.getElementById("city-date");
const temperature = document.getElementById("temperature");
const weatherCondition = document.getElementById("weather-condition");
const weatherIcon = document.getElementById("weather-icon");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const feelsLike = document.getElementById("feels-like");
const forecastContainer = document.getElementById("forecast-container");

// Format Date
function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toDateString();
}

// Weather Icon Mapper
function getWeatherIcon(main) {
  switch (main) {
    case "Clear":
      return "☀️";
    case "Clouds":
      return "⛅";
    case "Rain":
      return "🌧️";
    case "Drizzle":
      return "🌦️";
    case "Thunderstorm":
      return "⛈️";
    case "Snow":
      return "❄️";
    default:
      return "🌤️";
  }
}

// Show Error
function showError(message) {
  errorBar.textContent = message;
  errorBar.classList.remove("hidden");
}

// Hide Error
function hideError() {
  errorBar.classList.add("hidden");
}

// Fetch Current Weather
async function fetchWeather(city) {
  try {
    hideError();

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    // Status-based error handling
    if (!res.ok) {
      let message;

      switch (res.status) {
        case 400:
          message = "Bad request. Please enter a valid city name.";
          break;
        case 401:
          message = "Invalid API key. Please check your API key.";
          break;
        case 404:
          message = "City not found. Try another city.";
          break;
        case 429:
          message = "Too many requests. Please try again later.";
          break;
        case 500:
          message = "Server error. Please try again later.";
          break;
        default:
          message = "Something went wrong. Please try again.";
      }

      throw new Error(message);
    }

    const data = await res.json();

    updateCurrentWeather(data);
    fetchForecast(data.coord.lat, data.coord.lon);

  } catch (err) {
    showError(err.message);
    console.error(err);
  }
}

// Fetch 7-Day Forecast
async function fetchForecast(lat, lon) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) {
      let message;

      switch (res.status) {
        case 401:
          message = "Forecast API key issue.";
          break;
        case 429:
          message = "Too many forecast requests.";
          break;
        default:
          message = "Failed to fetch forecast.";
      }

      throw new Error(message);
    }

    const data = await res.json();
    updateForecast(data.daily);

  } catch (err) {
    console.error("Forecast Error:", err.message);
  }
}

// Update Current Weather UI
function updateCurrentWeather(data) {
  cityName.textContent = data.name;
  cityCountry.textContent = data.sys.country;
  cityDate.textContent = formatDate(data.dt);

  temperature.textContent = `${Math.round(data.main.temp)}°`;
  weatherCondition.textContent = data.weather[0].description;
  weatherIcon.textContent = getWeatherIcon(data.weather[0].main);

  humidity.innerHTML = `${data.main.humidity} <span class="text-xs text-gray-400">%</span>`;

  // Convert m/s → km/h
  const windKmH = (data.wind.speed * 3.6).toFixed(1);
  windSpeed.innerHTML = `${windKmH} <span class="text-xs text-gray-400">km/h</span>`;

  feelsLike.innerHTML = `${Math.round(data.main.feels_like)} <span class="text-xs text-gray-400">°C</span>`;
}

// Update Forecast UI
function updateForecast(days) {
  forecastContainer.innerHTML = "";

  days.slice(0, 7).forEach((day, index) => {
    const date = new Date(day.dt * 1000);

    const dayName =
      index === 0
        ? "Today"
        : date.toLocaleDateString("en-US", { weekday: "short" });

    const div = document.createElement("div");

    div.className =
      index === 0
        ? "border-2 border-blue-400 bg-gray-50 rounded-md p-2 flex flex-col items-center gap-1"
        : "border border-gray-200 rounded-md p-2 flex flex-col items-center gap-1";

    div.innerHTML = `
      <span class="text-xs text-gray-500 font-medium uppercase">${dayName}</span>
      <span class="text-xl">${getWeatherIcon(day.weather[0].main)}</span>
      <span class="text-sm font-medium text-gray-800">${Math.round(day.temp.max)}°</span>
      <span class="text-xs text-gray-400">${Math.round(day.temp.min)}°</span>
    `;

    forecastContainer.appendChild(div);
  });
}

// Search Events
searchBtn.addEventListener("click", () => {
  const city = searchInput.value.trim();
  if (city) fetchWeather(city);
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const city = searchInput.value.trim();
    if (city) fetchWeather(city);
  }
});

// Default Load
fetchWeather("New Delhi");