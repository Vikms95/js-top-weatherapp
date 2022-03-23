export async function fetchWeatherAPI (city,scale){
    try{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${scale}&appid=76d5136cd55d14c88e4d9549d0f550f2`)
        const data = await response.json()
        console.log(data)
        return data
    }catch(err){
        console.log('City not found!')
        return
    }
}