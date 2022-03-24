import {processData} from './logic/processData'
import {renderStaticElements} from './view/renderStaticElements'
import { addEventListeners } from './logic/addEventListeners'

addEventListeners();

(async function(){
    const a = await processData('Barcelona')
    renderStaticElements(a)
})()