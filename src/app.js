// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(
	weatherLocation.city,
);

// Init UI object
const ui = new UI();

// Get Location on DOM load
document.addEventListener('DOMContentLoaded', getLocation);

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.querySelector('#form').addEventListener('submit', (e) => {
	e.preventDefault();
	changeCity();
});

function getLocation() {
	weather
		.getLocation()
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
		// Change location
		weather.changeLocation(city);
		// Set location in ls
		storage.setLocationData(city);
		// Get and display weather
		getLocation();
		getWeather();
	}
}
