class Storage {
	constructor() {
		this.cityID;
		this.defaultCityID = '4122986';
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
