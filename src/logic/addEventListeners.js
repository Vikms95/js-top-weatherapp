import { processData } from './processData'
import { renderStaticElements } from '../view/renderStaticElements'

export async function addEventListeners(){

    const searchButton = document.querySelector('.fa-magnifying-glass')
    const searchInput = document.querySelector('input#search')
    const changeScaleButton = document.querySelector('.change-scale')
    const tempIconEl = document.querySelector('.temperature-icon')
    const cityNameEl = document.querySelector('.city-name')

    searchButton.addEventListener('click', async () =>{
        try{
            const dataToDisplay =  await processData(searchInput.value)
            renderStaticElements(dataToDisplay)
        }catch(err){
        }
    })

    changeScaleButton.addEventListener('click', async () =>{
        if(tempIconEl && cityNameEl){
            try{
                const scale = tempIconEl.textContent === 'ºC' ? 'imperial' : 'metric'
                const dataToDisplay = await processData(cityNameEl.textContent, scale)
                renderStaticElements(dataToDisplay)
            }catch(err){
            }
        }else{
            return
        }
    })
}