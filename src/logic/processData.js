import { renderStaticElements } from '../view/renderStaticElements'
import { fetchWeatherAPI } from './fetchWeatherAPI'

export async function processData(city){
    try{
        const data = await fetchWeatherAPI(city)
        console.log(data)
        const cityName = data.name
        const temperature = data.main.temp
        const feelsLikeTemp = data.main.feels_like
        const weather = data.weather[0].main
        return{cityName, temperature, feelsLikeTemp, weather}

    } catch(err){
        console.log('Not found')
        return
    }
}

const but = document.querySelector('button')
const inp = document.querySelector('input')
but.addEventListener('click', async () =>{
    try{
        const dataToDisplay =  await processData(inp.value)
        renderStaticElements(dataToDisplay)
    }catch(err){
        console.log('Not found')
    }
})