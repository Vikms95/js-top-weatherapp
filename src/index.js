import './css/style.css'
import bgImage from '/images/bg.jpg'
import {processData} from './logic/processData'
import {renderStaticElements} from './view/renderStaticElements'
import { addEventListeners } from './logic/addEventListeners'

// console.log(bgImage)

// document.body.style.backgroundImage = bgImage
addEventListeners();

(async function(){
    const defaultCity = await processData('Barcelona')
    renderStaticElements(defaultCity)
})()