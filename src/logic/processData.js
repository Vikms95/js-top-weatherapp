import { renderStaticElements } from '../view/renderStaticElements'
import { fetchWeatherAPI } from './fetchWeatherAPI'

export async function processData(city,scale = 'metric'){
    try{
        const {data,data2} = await fetchWeatherAPI(city, scale)
        const cityName = data.name
        const temperature = Math.ceil(data.main.temp)
        const weather = data.weather[0].main
        const icon = data.weather[0].icon
        const weatherDesc = data.weather[0].description
        const feelsLike = Math.ceil(data.main.feels_like)
        const humidity = data.main.humidity
        const windSpeed = Math.ceil(data.wind.speed)

        //TODO Forecast values do an array of objects?
        let dailyForecast = []

        for (let i = 1; i < 8 ; i++) {
            const day = data2.daily[i]
            const values = {
                temperatureMax : day.temp.max,
                temperatureMin : day.temp.min,
                weather : day.weather[0].main,
                icon : day.weather[0].icon
            } 
            dailyForecast.push(values)
        }
        
        return { 
            cityName,
            temperature,
            weather,
            icon,
            weatherDesc,
            feelsLike,
            humidity,
            windSpeed,
            scale,
            dailyForecast
        }

    } catch(err){
        console.log('Not found')
        return
    }
}

const searchButton = document.querySelector('.fa-magnifying-glass')
const searchInput = document.querySelector('input')
const changeScaleButton = document.querySelector('.change-scale')

searchButton.addEventListener('click', async () =>{
    try{
        const dataToDisplay =  await processData('Barcelona')
        renderStaticElements(dataToDisplay)
    }catch(err){
    }
})

changeScaleButton.addEventListener('click', async () =>{
    const tempIconEl = document.querySelector('.temperature-icon')
    const cityNameEl = document.querySelector('.city-name')
    if(tempIconEl && cityNameEl){
        const scale = tempIconEl.textContent === 'ºC' ? 'imperial' : 'metric'
        const dataToDisplay = await processData(cityNameEl.textContent, scale)
        renderStaticElements(dataToDisplay)
    }else{
        return
    }
})

