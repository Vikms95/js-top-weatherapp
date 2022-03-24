// Takes processData as argument
export function renderStaticElements(dataToDisplay){
    console.log(dataToDisplay)
    const weatherEl = document.querySelector('.weather-info')
    const weatherIconEl = document.querySelector('.weather-icon')
    const cityEl = document.querySelector('.city-name')
    const temperatureEl = document.querySelector('.temperature-value')
    const tempIconEl = document.querySelector('.temperature-icon')
    const feelsLikeIconEl = document.querySelector('.feels-like-icon')
    const feelsLikeEl = document.querySelector('.feels-like-value')
    const humidityIconEl = document.querySelector('.humidity-icon')
    const humidityEl = document.querySelector('.humidity-value')
    const windSpeedIconEl = document.querySelector('.wind-speed-icon')
    const windSpeedEl = document.querySelector('.wind-speed-value')
    // Implement forecast appending with for loop?
    
    weatherEl.textContent = dataToDisplay.weather
    weatherIconEl.innerHTML = `<img src="../icons/${dataToDisplay.icon}.png"></img>`
    cityEl.textContent = dataToDisplay.cityName
    temperatureEl.textContent = dataToDisplay.temperature
    tempIconEl.textContent = dataToDisplay.scale === 'metric' ? 'ºC' : 'ºF'

    feelsLikeIconEl.classList.add('fa-solid') 
    feelsLikeIconEl.classList.add('fa-temperature-high') 
    feelsLikeEl.textContent = dataToDisplay.feelsLike + ' ' + tempIconEl.textContent
    humidityIconEl.classList.add('fa-solid') 
    humidityIconEl.classList.add('fa-droplet') 
    humidityEl.textContent = dataToDisplay.humidity + ' %'
    windSpeedIconEl.classList.add('fa-solid') 
    windSpeedIconEl.classList.add('fa-wind') 
    windSpeedEl.textContent = dataToDisplay.windSpeed + ' km/h'

    for (let i = 0; i < dataToDisplay.dailyForecast.length; i++) {
        const div = document.querySelector(`.day${i + 1}`)
        //TODO Implement weekday
        // const weekday = ''
        const maxTempEl = document.querySelector(`.day${i + 1} > .max-temp`)
        const minTempEl = document.querySelector(`.day${i + 1} > .min-temp`)
        const weatherEl = document.querySelector(`.day${i + 1} > .weather`)
        const weatherIconEl = document.querySelector(`.day${i + 1} > .icon`)

        maxTempEl.textContent = Math.ceil(dataToDisplay.dailyForecast[i].temperatureMax) + ' ' + tempIconEl.textContent
        minTempEl.textContent = Math.ceil(dataToDisplay.dailyForecast[i].temperatureMin) + ' '+ tempIconEl.textContent
        weatherEl.textContent = dataToDisplay.dailyForecast[i].weather
        weatherIconEl.innerHTML = `<img src="../icons/${dataToDisplay.dailyForecast[i].icon}.png"></img>`

        div.appendChild(maxTempEl)
        div.appendChild(minTempEl)
        div.appendChild(weatherEl)
        div.appendChild(weatherIconEl)
        
    }
}