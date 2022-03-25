import { fetchAPI } from './fetchAPI'

export async function processData(city,scale = 'metric'){
    try{
        const weatherData = await fetchAPI(city, scale)
        if(!weatherData) return
        const cityName = weatherData.dataSet1.name
        const countryName = weatherData.dataSet1.sys.country
        let time = new Date(new Date().toLocaleString('en-US', {timeZone: weatherData.timezone}))
        const temperature = Math.floor(weatherData.dataSet1.main.temp)
        const weather = weatherData.dataSet1.weather[0].main
        const icon = weatherData.dataSet1.weather[0].icon
        const weatherDesc = weatherData.dataSet1.weather[0].description
        const feelsLike = Math.floor(weatherData.dataSet1.main.feels_like)
        const humidity = weatherData.dataSet1.main.humidity
        const windSpeed = Math.floor(weatherData.dataSet1.wind.speed)

        let dailyForecast = []

        for (let i = 1; i < 8 ; i++) {
            const weekDay = weatherData.dataSet2.daily[i]
            const values = {
                temperatureMax : weekDay.temp.max,
                temperatureMin : weekDay.temp.min,
                weather : weekDay.weather[0].main,
                icon : weekDay.weather[0].icon
            }
            dailyForecast.push(values)
        }
        
        return { 
            cityName,
            countryName,
            time,
            temperature,
            weather,
            weatherDesc,
            icon,
            feelsLike,
            humidity,
            windSpeed,
            scale,
            dailyForecast
        }

    } catch(err){
        return
    }
}


