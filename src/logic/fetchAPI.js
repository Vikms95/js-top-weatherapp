export async function fetchAPI (city,scale){
    
    // Get loader element to toogle it's display property while awaiting fetch
    const loaderEl = document.querySelector('.loader')
    
    try{
        // Display the loader div while the data is fetching
        loaderEl.textContent = 'Loading ...'
        loaderEl.classList.toggle('visible')
        
        // Try to fetch data in less than 5 seconds
        const weatherData = await Promise.race([
            fetchWeatherAPI(city,scale),
            timeoutPromise(5000)]).then((weatherData)=>{
            
            // If resolve, toogle display to not show
            loaderEl.classList.toggle('visible')
            return weatherData
        })

        return weatherData

    }catch(err){

        // If rejected, show error message for 2
        // seconds and toogle display to now show
        loaderEl.textContent = 'City not found!'
        setTimeout(() =>{
            loaderEl.classList.toggle('visible')
            loaderEl.textContent = 'Loading ...'
        },2000)

        return
    }
}
const timeoutPromise = (delay) =>{
    return new Promise((reject) =>{
        setTimeout(() =>{
            reject('Timeout')
        }, delay)
    })
}
    
const fetchWeatherAPI = async (city,scale) =>{
    const response1 = 
      await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${scale}&appid=76d5136cd55d14c88e4d9549d0f550f2`)
    const dataSet1 = await response1.json()
    
    const response2 =  
      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${dataSet1.coord.lat}&lon=${dataSet1.coord.lon}&units=${scale}&exclude=minutely,alerts&appid=76d5136cd55d14c88e4d9549d0f550f2`)
    const dataSet2 = await response2.json()

    return {dataSet1,dataSet2} 
}
    