// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);

// Init UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.querySelector('#city-input').addEventListener('keyup', changeCity);

function getWeather() {
  weather
    .getWeather()
    .then((results) => ui.paint(results))
    .catch((err) => console.log(err));
}

function changeCity(e) {
  const city = e.target.value;

  if (city !== '') {
    // Change location
    weather.changeLocation(city);
    
    // Set location in ls
    storage.setLocationData(city);
    
    // Get and display weather
    getWeather();
  }

  e.preventDefault();
}
