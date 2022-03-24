export async function fetchWeatherAPI (city,scale){
    try{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${scale}&appid=76d5136cd55d14c88e4d9549d0f550f2`)
        const data = await response.json()
        const response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,alerts&appid=76d5136cd55d14c88e4d9549d0f550f2`)
        const data2 = await response2.json()
        
        return {
            data,
            data2
        }
    }catch(err){
        console.log('City not found!')
        return
    }
}