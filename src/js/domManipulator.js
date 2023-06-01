import {
	unitMode,
	toggleUnit,
	conditionTextOutput,
	currentTempOutput,
	nameOutput,
	regionOutput,
	countryOutput,
	localTimeOutput,
	windSpeedOutput,
	windDirOutput,
	pressureOutput,
	humidityOutput,
	visibilityOutput,
	uvOutput,
} from './cacheDom';
import { weatherData } from './weatherApi';

const updateCurrentWeatherOutputs = async () => {
	conditionTextOutput.textContent = weatherData.conditions;
	if (toggleUnit.checked === false) {
		windSpeedOutput.textContent = `${weatherData.windSpeed.imperial} mph`;
		currentTempOutput.textContent = `${weatherData.temp.imperial} F°`;
		visibilityOutput.textContent = `${weatherData.visibility.imperial} mi`;
	} else {
		windSpeedOutput.textContent = `${weatherData.windSpeed.metric} kph`;
		currentTempOutput.textContent = `${weatherData.temp.metric} C°`;
		visibilityOutput.textContent = `${weatherData.visibility.metric} km`;
	}
	nameOutput.textContent = weatherData.name;
	regionOutput.textContent = weatherData.region;
	countryOutput.textContent = weatherData.country;
	localTimeOutput.textContent = weatherData.time;

	windDirOutput.textContent = weatherData.windDir;
	pressureOutput.textContent = weatherData.pressure;
	humidityOutput.textContent = weatherData.humidity;

	uvOutput.textContent = weatherData.uv;
};
const updateUnitMode = () => {
	if (toggleUnit.checked === true) {
		unitMode.textContent = 'Metric';
	} else {
		unitMode.textContent = 'Imperial';
	}
};
export { updateCurrentWeatherOutputs, updateUnitMode };