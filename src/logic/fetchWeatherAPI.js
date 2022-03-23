export async function fetchWeatherAPI (city){
    try{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=76d5136cd55d14c88e4d9549d0f550f2`)
        const data = await response.json()
        return data
    }catch(err){
        console.log('City not found!')
        return
    }
}