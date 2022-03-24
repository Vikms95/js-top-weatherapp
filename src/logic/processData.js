import { renderStaticElements } from '../view/renderStaticElements'
import { fetchWeatherAPI } from './fetchWeatherAPI'

export async function processData(city,scale = 'metric'){
    try{
        const {data,data2} = await fetchWeatherAPI(city, scale)
        console.log(data2,data)
        const cityName = data.name
        const countryName = data.sys.country
        let time = new Date(new Date().toLocaleString('en-US', {timeZone: data2.timezone}))

        console.log(time)
        const temperature = Math.floor(data.main.temp)
        const weather = data.weather[0].main
        const icon = data.weather[0].icon
        const weatherDesc = data.weather[0].description
        const feelsLike = Math.floor(data.main.feels_like)
        const humidity = data.main.humidity
        const windSpeed = Math.floor(data.wind.speed)

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
        console.log(dailyForecast)
        
        return { 
            cityName,
            countryName,
            time,
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


