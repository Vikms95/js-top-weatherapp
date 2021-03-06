import icon1d from '/icons/01d.png'
import icon1n from '/icons/01n.png'
import icon2d from '/icons/02d.png'
import icon2n from '/icons/02n.png'
import icon3d from '/icons/03d.png'
import icon3n from '/icons/03n.png'
import icon4d from '/icons/04d.png'
import icon4n from '/icons/04n.png'
import icon9d from '/icons/09d.png'
import icon9n from '/icons/09n.png'
import icon10d from '/icons/10d.png'
import icon10n from '/icons/10n.png'
import icon11d from '/icons/11d.png'
import icon11n from '/icons/11n.png'
import icon13d from '/icons/13d.png'
import icon13n from '/icons/13n.png'
import icon50d from '/icons/50d.png'
import icon50n from '/icons/50n.png'
import iconUnknown from '/icons/unknown.png'


export function renderStaticElements(dataToDisplay){
    const bodyEl = document.querySelector('body')
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
    const searchInput = document.querySelector('input#search')
    
    const weekDayNames = [
        'Monday', 
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]
    
    let icons = {
        '01d': icon1d,  
        '01n': icon1n,
        '02d': icon2d,
        '02n': icon2n,
        '03d': icon3d,
        '03n': icon3n,
        '04d':icon4d,
        '04n':icon4n,
        '09d':icon9d,
        '09n':icon9n,
        '10d':icon10d,
        '10n':icon10n,
        '11d':icon11d,
        '11n':icon11n,
        '13d':icon13d,
        '13n':icon13n,
        '50d':icon50d,
        '50n':icon50n,
        'unknown':iconUnknown
    }
    let iconToUse
    Object.entries(icons).forEach(icon =>{
        if(icon[0] == dataToDisplay.icon){
            iconToUse = icon[1]
        }
    })

    weatherIconEl.innerHTML = `<img src="${iconToUse}"></img>`
    weatherEl.textContent = dataToDisplay.weather
    cityEl.textContent = dataToDisplay.cityName + ', ' + dataToDisplay.countryName
    temperatureEl.textContent = dataToDisplay.temperature
    tempIconEl.textContent = dataToDisplay.scale === 'metric' ? '??C' : '??F'
    
    timeEl.textContent = weekDayNames[dataToDisplay.time.getDay()] + ', ' 
                         + dataToDisplay.time.getDate() + ' - ' 
                         + ('0' + dataToDisplay.time.getHours()).slice(-2) + ':' 
                         + ('0'+ dataToDisplay.time.getMinutes()).slice(-2)
    
    feelsLikeIconEl.classList.add('fa-solid') 
    feelsLikeIconEl.classList.add('fa-temperature-high') 
    feelsLikeEl.textContent = dataToDisplay.feelsLike + ' ' + tempIconEl.textContent
    humidityIconEl.classList.add('fa-solid') 
    humidityIconEl.classList.add('fa-droplet') 
    humidityEl.textContent = dataToDisplay.humidity + ' %'
    windSpeedIconEl.classList.add('fa-solid') 
    windSpeedIconEl.classList.add('fa-wind') 
    searchInput.value = ''

    windSpeedEl.textContent = dataToDisplay.windSpeed + ' ' 
                              + (dataToDisplay.scale === 'metric' 
                                  ? 'meter/sec' 
                                  : 'miles/hour')

    scaleToChangeEl.textContent = 'Change to ' 
                                + (dataToDisplay.scale === 'metric' 
                                    ? 'imperial' 
                                    : 'metric')
  
    for (let i = 0; i < dataToDisplay.dailyForecast.length; i++) {
        const div = document.querySelector(`.day${i + 1}`)
        const weekDayEl = document.querySelector(`.day${i + 1} > .weekday`)
        const maxTempEl = document.querySelector(`.day${i + 1} > .max-temp`)
        const minTempEl = document.querySelector(`.day${i + 1} > .min-temp`)
        const weatherEl = document.querySelector(`.day${i + 1} > .weather-day`)
        const weatherIconEl = document.querySelector(`.day${i + 1} > .icon`)
      

        let iconToUse
        Object.entries(icons).forEach(icon =>{
            if(icon[0] == dataToDisplay.icon){
                iconToUse = icon[1]
            }
        })
    
        weatherIconEl.innerHTML = `<img src="${iconToUse}"></img>`
        weatherEl.textContent = dataToDisplay.dailyForecast[i].weather
        maxTempEl.textContent = Math.floor(dataToDisplay.dailyForecast[i].temperatureMax) + ' ' + tempIconEl.textContent
        minTempEl.textContent = Math.floor(dataToDisplay.dailyForecast[i].temperatureMin) + ' '+ tempIconEl.textContent
        weekDayEl.innerHTML = getWeekdayName(dataToDisplay.time.getDay(), i, weekDayNames)
        
        div.appendChild(weekDayEl)
        div.appendChild(maxTempEl)
        div.appendChild(minTempEl)
        div.appendChild(weatherEl)
        div.appendChild(weatherIconEl) 
    }
}

const getWeekdayName = (currentDay,daysFromToday, weekDayNames) =>{
  
    // We substract 7 from the dayToSelect value in case the number
    // surpasses 'Sunday', so in that case,
    // it can start counting from Monday
    let dayToSelect = currentDay + daysFromToday
    if(dayToSelect > 6){
        dayToSelect -= 7
    }
    return weekDayNames[dayToSelect]
}

// const changeBackground = (weather,hour) =>{
// // Change background based on weather and hour values
// // and change font color if needed
//     if(hour >= 6 && hour <= 20){
//         const backgroundsDay = {
//             'Thunderstorm': '',
//             'Drizzle': '',
//             'Rain': '',
//             'Snow' : '', 
//             'Clear': '/images/day-clear.jpg',
//             'Clouds':'',
//             // 
//             'Mist': '',
//             'Smoke': '',
//             'Haze': '',
//             'Dust': '',
//             'Fog': '',
//             'Sand': '',
//             'Dust': '',
//             'Ash': '',
//             'Squall': '',
//             'Tornado': '',
//         }
//         return backgroundsDay.weather
//     }
//     else{
//         const backgroundsNight = {
//             'Thunderstorm': '',
//             'Drizzle': '',
//             'Rain': '',
//             'Snow' : '', 
//             'Clear': '',
//             'Clouds':'',
//             // 
//             'Mist': '',
//             'Smoke': '',
//             'Haze': '',
//             'Dust': '',
//             'Fog': '',
//             'Sand': '',
//             'Dust': '',
//             'Ash': '',
//             'Squall': '',
//             'Tornado': '',

//         }
//         return backgroundsNight.weather
//     }
// }