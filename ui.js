class UI {
  constructor() {
    this.city = document.querySelector('#w-city');
    this.country = document.querySelector('#w-country');
    this.date = document.querySelector('#date');
    this.icon = document.querySelector('#w-icon');
    this.temp = document.querySelector('#w-temp');
    this.description = document.querySelector('#w-desc');
    this.wind = document.querySelector('#w-wind');
    this.humidity = document.querySelector('#w-humidity');
    this.sunrise = document.querySelector('#w-sunrise');
    this.sunset = document.querySelector('#w-sunset');
  }

  paint(weather) {
    this.city.textContent = weather.name;
    this.country.textContent = `, ${weather.sys.country}`;
    this.date.textContent = '';
    this.icon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    this.temp.textContent = `${Math.round(weather.main.temp)} F deg`;
    this.description.textContent = `Description: ${weather.weather[0].description}`;
    this.wind.textContent = `Wind: ${weather.wind.speed}mph`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.sunrise.textContent = `Sunrise at: ${getSunrise()} PST`;
    this.sunset.textContent = `Sunset at: ${getSunset()} PST`;

    function getSunrise() {
      const time = new Date(parseInt(`${weather.sys.sunrise}000`));
      function formattedTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        if (hours < 10) {
          hours = '0' + hours;
        }
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        return `${hours}:${minutes}`;
      }
      return formattedTime();
    }

    function getSunset() {
      const time = new Date(parseInt(`${weather.sys.sunset}000`));
      function formattedTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        if (hours < 10) {
          hours = '0' + hours;
        }
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        return `${hours}:${minutes}`;
      }
      return formattedTime();
    }
  }
}
