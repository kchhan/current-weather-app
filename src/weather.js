class Weather {
	constructor(city, latitude, longitude) {
		this.apiKey1 = '2f87c24233c12efee093faf2f7c4b51f'; // secondary acc
		this.apiKey2 = 'ae436c42d538a0a7f9d3b6573190e7d2'; // primary
		this.city = city;
		this.latitude = latitude;
		this.longitude = longitude;
		this.units = 'imperial';
	}

	async getLocation() {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey1}&units=${this.units}`,
			{ mode: 'cors' }
		);

		const responseData = await response.json();

		return responseData;
	}

	async getWeather() {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&exclude=minutely&appid=${this.apiKey2}&units=${this.units}`,
			{ mode: 'cors' }
		);

		const responseData = await response.json();

		return responseData;
	}

	// Change weather location
	changeLocation(city) {
		this.city = city;
	}
}
