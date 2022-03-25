import { fetchAPI } from './fetchAPI'

export async function processData(city,scale = 'metric'){
    try{
        const data = await fetchAPI(city, scale)
        if(!data) return
        const cityName = data[0].name
        const countryName = data[0].sys.country
        let time = new Date(new Date().toLocaleString('en-US', {timeZone: data[1].timezone}))

        const temperature = Math.floor(data[0].main.temp)
        const weather = data[0].weather[0].main
        const icon = data[0].weather[0].icon
        const weatherDesc = data[0].weather[0].description
        const feelsLike = Math.floor(data[0].main.feels_like)
        const humidity = data[0].main.humidity
        const windSpeed = Math.floor(data[0].wind.speed)

        let dailyForecast = []

        for (let i = 1; i < 8 ; i++) {
            const day = data[1].daily[i]
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
        return
    }
}


