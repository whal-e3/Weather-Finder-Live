const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
	// Get city name in lower case
	const cityName = document.getElementById('cityName').value;
	// get json file
	getJson().then(cityNames => {
		let cityID;
		for (i = 0; i < cityNames.length; i++) {
			if (cityNames[i].name.toLowerCase() === cityName.toLowerCase()) {
				cityID = cityNames[i].id;
				break;
			}
		}
		// Change location
		weather.changeLocation(cityID);
		// Set location in LS
		storage.setLocationData(cityID);
		// Get and display weather
		getWeather();
	});

	// Close modal
	$('#locModal').modal('hide');
});

function getWeather() {
	weather
		.getWeather()
		.then(results => {
			ui.paint(results);
		})
		.catch(err => console.log(err));
}

async function getJson() {
	const response = await fetch('city.list.json');
	const data = await response.json();
	return data;
}
