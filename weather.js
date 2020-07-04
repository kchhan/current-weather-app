class Weather {
  constructor(city) {
    this.apiKey = 'ae436c42d538a0a7f9d3b6573190e7d2';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&appid=${this.apiKey}`,
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
