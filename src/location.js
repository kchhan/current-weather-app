class Location {
	constructor(city) {
		this.apiKey = '2f87c24233c12efee093faf2f7c4b51f'; // secondary acc
		this.city = city;
	}

	async getLocation() {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=${this.units}`,
			{ mode: 'cors' }
		);

		const responseData = await response.json();

		if (responseData.cod === 404) {
			return this.city;
		}

		return {
			city: responseData.name,
			latitude: responseData.coord.lat,
			longitude: responseData.coord.lon,
		};
	}

	// Change weather location
	changeLocation(city) {
		this.city = city;
	}
}
