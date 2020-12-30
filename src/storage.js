class Storage {
	constructor() {
		this.city;
		this.latitude;
		this.longitude;
	}

	getLocationData() {
		if (localStorage.getItem('city') === null) {
			this.city = 'San Francisco';
			this.latitude = 37.77;
			this.longitude = -122.42;
		} else {
			this.city = localStorage.getItem('city');
			this.latitude = localStorage.getItem('latitude');
			this.longitude = localStorage.getItem('longitude');
		}

		return {
			city: this.city,
			latitude: this.latitude,
			longitude: this.longitude,
		};
	}

	setCity(city) {
		localStorage.setItem('city', city);
	}

	setLatitude(latitude) {
		localStorage.setItem('latitude', latitude);
	}

	setLongitude(longitude) {
		localStorage.setItem('longitude', longitude);
	}
}
