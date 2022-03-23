export function renderStaticElements(dataToDisplay){
    console.log(dataToDisplay)
    const body = document.querySelector('body')
    const container = document.querySelector('.container')
    const weatherEl = document.querySelector('.weather-name')
    const cityEl = document.querySelector('.city-name')

    weatherEl.textContent = dataToDisplay.weather
    cityEl.textContent = dataToDisplay.cityName
}