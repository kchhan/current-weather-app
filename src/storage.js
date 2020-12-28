class Storage {
	constructor() {
		this.latitude;
		this.longitude;
		this.city;
		this.defaultCity = 'London';
	}

	getLocationData() {
		if (localStorage.getItem('city') === null) {
			this.city = this.defaultCity;
			this.latitude = 51.51;
			this.longitude = -0.13;
		} else {
			this.city = localStorage.getItem('city');
			this.latitude = localStorage.getItem('latitude');
			this.longitude = localStorage.getItem('longitdue');
		}

		return {
			city: this.city,
			latitude: this.latitude,
			longitude: this.longitude,
		};
	}

	setLocationData(city) {
		localStorage.setItem('city', city);
		localStorage.setItem('latitude', this.latitude);
		localStorage.setItem('longitude', this.longitude);
	}
}
