// Takes processData as argument
export function renderStaticElements(dataToDisplay){
    console.log(dataToDisplay)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const weatherEl = document.querySelector('.weather-info')
    const weatherIconEl = document.querySelector('.weather-icon')
    const cityEl = document.querySelector('.city-name')
    const timeEl = document.querySelector('.date')
    const temperatureEl = document.querySelector('.temperature-value')
    const tempIconEl = document.querySelector('.temperature-icon')
    const feelsLikeIconEl = document.querySelector('.feels-like-icon')
    const feelsLikeEl = document.querySelector('.feels-like-value')
    const humidityIconEl = document.querySelector('.humidity-icon')
    const humidityEl = document.querySelector('.humidity-value')
    const windSpeedIconEl = document.querySelector('.wind-speed-icon')
    const windSpeedEl = document.querySelector('.wind-speed-value')
    const scaleToChangeEl = document.querySelector('.change-scale-desc')
    // Implement forecast appending with for loop?
    
    weatherEl.textContent = dataToDisplay.weather
    weatherIconEl.innerHTML = `<img src="../icons/${dataToDisplay.icon}.png"></img>`
    cityEl.textContent = dataToDisplay.cityName + ', ' + dataToDisplay.countryName
    timeEl.textContent = days[dataToDisplay.time.getDay()] + ', ' + dataToDisplay.time.getDate() + ' - ' + dataToDisplay.time.getHours() + ':' + dataToDisplay.time.getMinutes()
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
    windSpeedEl.textContent = dataToDisplay.windSpeed + ' ' + (dataToDisplay.scale === 'metric' ? 'meter/sec' : 'miles/hour')
    scaleToChangeEl.textContent = 'Change to ' + (dataToDisplay.scale === 'metric' ? 'imperial' : 'metric')

    for (let i = 0; i < dataToDisplay.dailyForecast.length; i++) {
        const div = document.querySelector(`.day${i + 1}`)
        //TODO Implement weekday
        // const weekday = ''
        const maxTempEl = document.querySelector(`.day${i + 1} > .max-temp`)
        const minTempEl = document.querySelector(`.day${i + 1} > .min-temp`)
        const weatherEl = document.querySelector(`.day${i + 1} > .weather-day`)
        const weatherIconEl = document.querySelector(`.day${i + 1} > .icon`)

        maxTempEl.textContent = Math.floor(dataToDisplay.dailyForecast[i].temperatureMax) + ' ' + tempIconEl.textContent
        minTempEl.textContent = Math.floor(dataToDisplay.dailyForecast[i].temperatureMin) + ' '+ tempIconEl.textContent
        weatherEl.textContent = dataToDisplay.dailyForecast[i].weather
        weatherIconEl.innerHTML = `<img src="../icons/${dataToDisplay.dailyForecast[i].icon}.png"></img>`

        div.appendChild(maxTempEl)
        div.appendChild(minTempEl)
        div.appendChild(weatherEl)
        div.appendChild(weatherIconEl)
        
    }
}