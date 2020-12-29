class Weather {
	constructor(latitude, longitude) {
		this.apiKey = 'ae436c42d538a0a7f9d3b6573190e7d2'; // primary
		this.latitude = latitude;
		this.longitude = longitude;
		this.units = 'imperial';
	}

	async getWeather() {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&exclude=minutely&appid=${this.apiKey}&units=${this.units}`,
			{ mode: 'cors' }
		);

		const responseData = await response.json();

		return responseData;
	}
}
