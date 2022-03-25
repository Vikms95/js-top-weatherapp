export async function fetchWeatherAPI (city,scale){
    try{
        //TODO Refactor with Promise.all
        const loaderEl = document.querySelector('.loader')
        loaderEl.classList.toggle('visible')
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${scale}&appid=76d5136cd55d14c88e4d9549d0f550f2`)
        const data = await response.json()
        const response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=${scale}&exclude=minutely,alerts&appid=76d5136cd55d14c88e4d9549d0f550f2`)
        const data2 = await response2.json()
        loaderEl.classList.toggle('visible')
        // const response3 = await fetch('https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10')
        // const data3 = await response3.json()
        // console.log(data3)
        return {
            data,
            data2
        }
    }catch(err){
        console.log('City not found!')
        return
    }
}