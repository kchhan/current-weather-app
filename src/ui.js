class UI {
	constructor() {
		/**
		 * first section
		 */
		this.cityName = document.getElementById('city-name');
		this.cityStatus = document.getElementById('city-status');
		this.cityCurrentWeather = document.getElementById('city-current-weather');
		this.todayHigh = document.getElementById('today-high');
		this.todayLow = document.getElementById('today-low');

		/**
		 * second section
		 */
		this.secondSection = document.getElementById('second-section');

		/**
		 * third section
		 */
		this.thirdSection = document.getElementById('third-section');

		/**
		 * fourth section
		 */
		this.sunrise = document.getElementById('sunrise');
		this.sunset = document.getElementById('sunset');
		this.humidity = document.getElementById('humidity');
		this.wind = document.getElementById('wind');
		this.pressure = document.getElementById('pressure');
		this.uvi = document.getElementById('uvi');
	}

	paintLocation(data) {
		/**
		 * first section
		 */
		this.cityName.textContent = data.name;
	}

	paintWeather(data) {
		/**
		 * first section
		 */
		this.cityCurrentWeather.textContent = Math.round(data.current.temp);
		this.cityStatus.textContent = data.current.weather[0].description;
		this.todayHigh.textContent = Math.round(data.daily[0].temp.max);
		this.todayLow.textContent = Math.round(data.daily[0].temp.min);

		/**
		 * second section
		 */
		for (let i = 0; i < 24; i++) {
			let cell = document.createElement('div');
			let hourCell = document.createElement('div');
			let iconCell = document.createElement('div');
			let tempCell = document.createElement('div');

			// from seconds to milliseconds
			let hour = new Date(data.hourly[i].dt * 1000).getHours();
			let icon = document.createElement('img');
			icon.src = `https://openweathermap.org/img/wn/${data.hourly[i].weather[0].icon}.png`;
			let temp = Math.round(data.hourly[i].temp);

			hourCell.textContent = hour;
			tempCell.textContent = temp;
			iconCell.appendChild(icon);

			cell.appendChild(hourCell);
			cell.appendChild(iconCell);
			cell.appendChild(tempCell);

			this.secondSection.appendChild(cell);
		}

		/**
		 * third section
		 */
		for (let i = 0; i < 8; i++) {
			let cell = document.createElement('div');
			let dayCell = document.createElement('div');
			let iconCell = document.createElement('div');
			let tempCell = document.createElement('div');
			let highTempCell = document.createElement('div');
			let lowTempCell = document.createElement('div');

			let day = new Date(data.daily[i].dt * 1000).getDay();
			switch (day) {
				case 0:
					dayCell.textContent = 'Sunday';
					break;
				case 1:
					dayCell.textContent = 'Monday';
					break;
				case 2:
					dayCell.textContent = 'Tuesday';
					break;
				case 3:
					dayCell.textContent = 'Wednesday';
					break;
				case 4:
					dayCell.textContent = 'Thursday';
					break;
				case 5:
					dayCell.textContent = 'Friday';
					break;
				case 6:
					dayCell.textContent = 'Saturday';
					break;
			}

			let icon = document.createElement('img');
			icon.src = `https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}.png`;

			highTempCell.textContent = Math.round(data.daily[i].temp.max);
			lowTempCell.textContent = Math.round(data.daily[i].temp.min);

			iconCell.appendChild(icon);
			tempCell.appendChild(highTempCell);
			tempCell.appendChild(lowTempCell);

			cell.appendChild(dayCell);
			cell.appendChild(iconCell);
			cell.appendChild(tempCell);

			this.thirdSection.appendChild(cell);
		}

		/**
		 * fourth section
		 */
		this.sunrise.textContent =
			new Date(data.daily[0].sunrise * 1000).toLocaleTimeString() + ' PST';
		this.sunset.textContent =
			new Date(data.daily[0].sunset * 1000).toLocaleTimeString() + ' PST';
		this.humidity.textContent = data.daily[0].humidity;
		this.wind.textContent = data.daily[0].wind_speed + ' mph';
		this.pressure.textContent = data.daily[0].pressure + ' inHg';
		this.uvi.textContent = data.daily[0].uvi;
	}
}
