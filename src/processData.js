import { fetchAPI } from './fetchAPI'

export async function processData(city){
    const data = await fetchAPI(city)
    const cityName = data.name
    const temperature = data.main.temp
    const feelsLikeTemp = data.main.feels_like
    const weather = data.weather[0].main
    console.log(cityName,temperature,feelsLikeTemp,weather)

}