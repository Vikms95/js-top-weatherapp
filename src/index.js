import bgImage from '../images/bg.jpg'
import {processData} from './logic/processData'
import {renderStaticElements} from './view/renderStaticElements'
import { addEventListeners } from './logic/addEventListeners'

console.log(bgImage)

document.body.style.backgroundImage = 'url(\'../dist/e6f38d24bcbe65bc4b4a.jpg\')'
addEventListeners();

(async function(){
    const defaultCity = await processData('Barcelona')
    renderStaticElements(defaultCity)
})()