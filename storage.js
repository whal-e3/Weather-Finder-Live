class Storage {
	constructor() {
		this.cityID;
		this.defaultCityID = '14256';
	}

	getLocationData() {
		if (localStorage.getItem('cityID') === null) {
			this.cityID = this.defaultCityID;
		} else {
			this.cityID = localStorage.getItem('cityID');
		}
		return this.cityID;
	}

	setLocationData(cityID) {
		localStorage.setItem('cityID', cityID);
	}
}
