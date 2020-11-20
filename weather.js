class Weather {
	constructor(cityID) {
		this.apiKey = '584ffc2b295ec35e87375a7c53c30108';
		this.cityID = cityID;
	}

	async getWeather() {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?id=${this.cityID}&appid=${this.apiKey}`
		);
		const responseData = await response.json();
		return responseData;
	}

	changeLocation(cityID) {
		this.cityID = cityID;
	}
}
