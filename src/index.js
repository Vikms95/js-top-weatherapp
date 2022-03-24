import {processData} from './logic/processData'
import {renderStaticElements} from './view/renderStaticElements'

(async function(){
    const a = await processData('Barcelona')
    renderStaticElements(a)
})()