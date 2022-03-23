import { renderStaticElements } from '../view/renderStaticElements'
import { fetchWeatherAPI } from './fetchWeatherAPI'

export async function processData(city,scale = 'metric'){
    try{
        const data = await fetchWeatherAPI(city, scale)
        console.log(data)
        const cityName = data.name
        const temperature = data.main.temp
        const feelsLikeTemp = data.main.feels_like
        const weather = data.weather[0].main
        return{cityName, temperature, feelsLikeTemp, weather, scale}

    } catch(err){
        console.log('Not found')
        return
    }
}

const searchButton = document.querySelector('.search-weather')
const searchInput = document.querySelector('input')
const changeScaleButton = document.querySelector('.change-scale')

searchButton.addEventListener('click', async () =>{
    try{
        const dataToDisplay =  await processData(searchInput.value)
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

