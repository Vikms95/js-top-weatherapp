// Takes processData as argument
export function renderStaticElements(dataToDisplay){
    console.log(dataToDisplay)
    const body = document.querySelector('body')
    const container = document.querySelector('.container')
    const weatherEl = document.querySelector('.weather-name')
    const weatherIconEl = document.querySelector('.weather-icon')
    const cityEl = document.querySelector('.city-name')
    const temperatureEl = document.querySelector('.temperature-number')
    const tempIconEl = document.querySelector('.temperature-icon')
    const feelsLikeEl = document.querySelector('.feels-like')
    const humidityEl = document.querySelector('.humidity')
    const windSpeedEl = document.querySelector('.wind-speed')
 

    weatherEl.textContent = dataToDisplay.weather
    weatherIconEl.innerHTML = `<img src="../icons/${dataToDisplay.icon}.png"></img>`
    cityEl.textContent = dataToDisplay.cityName
    temperatureEl.textContent = dataToDisplay.temperature
    tempIconEl.textContent = dataToDisplay.scale === 'metric' ? 'ºC' : 'ºF'
    feelsLikeEl.textContent = dataToDisplay.feelsLike
    humidityEl.textContent = dataToDisplay.humidity
    windSpeedEl.textContent = dataToDisplay.windSpeed
}