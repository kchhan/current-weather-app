/**
 * Initialize Local Storage
 */
const storage = new Storage();

/**
 * Get Local Storage data or set default values
 * @return @object
 */
const weatherLocation = storage.getLocationData();

/**
 * Get latitude and longitude from city
 * @param @string city
 * @return @object latitude and longitude @numbers city @string
 */
const coordinates = new Location(weatherLocation.city);

/**
 * Get weather data from fetch api call
 * @params @numbers latitude and longitude
 * @return @json weather data
 */
const weather = new Weather(
	weatherLocation.latitude,
	weatherLocation.longitude
);

/**
 * Initialize the front end for application
 */
const ui = new UI();

// Get Location on DOM load
document.addEventListener('DOMContentLoaded', getLocation);

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.querySelector('#form').addEventListener('submit', changeCity);

function getLocation() {
	// Fetch call returns a Promise
	const promise = coordinates.getLocation();

	promise
		.then((results) => storage.setLatitude(results.latitude))
		.catch((err) => console.log(err));
	promise
		.then((results) => storage.setLongitude(results.longitude))
		.catch((err) => console.log(err));
	promise
		.then((results) => ui.paintLocation(results))
		.catch((err) => console.log(err));
}

function getWeather() {
	weather
		.getWeather()
		.then((results) => ui.paintWeather(results))
		.catch((err) => console.log(err));
}

function changeCity() {
	const form = document.getElementById('form');
	const input = form.elements['city'];
	const city = input.value;

	if (city !== '') {
		coordinates.changeLocation(city);
		storage.setCity(city);
		getLocation();
		getWeather();
	}
}
