// Takes processData as argument
export function renderStaticElements(dataToDisplay){
    console.log(dataToDisplay)
    const body = document.querySelector('body')
    const container = document.querySelector('.container')
    const weatherEl = document.querySelector('.weather-name')
    const cityEl = document.querySelector('.city-name')
    const temperatureEl = document.querySelector('.temperature-number')
    const tempIconEl = document.querySelector('.temperature-icon')

    weatherEl.textContent = dataToDisplay.weather
    cityEl.textContent = dataToDisplay.cityName
    temperatureEl.textContent = dataToDisplay.temperature
    tempIconEl.textContent = dataToDisplay.scale === 'metric' ? 'ºC' : 'ºF'
}