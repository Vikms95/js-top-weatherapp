export async function fetchAPI (city,scale){
    const loaderEl = document.querySelector('.loader')
    try{
        //TODO Refactor with Promise.all
        loaderEl.textContent = 'Loading ...'
        loaderEl.classList.toggle('visible')
        const data = await Promise.race([
            fetchWeatherAPI(city,scale),
            timeoutPromise(5000)
        ]).then(function(resolve){
            loaderEl.classList.toggle('visible')

            return resolve
        })
        return data

    }catch(err){
        loaderEl.textContent = 'City not found!'
        setTimeout(() =>{
            loaderEl.classList.toggle('visible')
            loaderEl.textContent = 'Loading ...'
        }
        ,2000)
        return
    }
}
    
const fetchWeatherAPI = async (city,scale) =>{
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${scale}&appid=76d5136cd55d14c88e4d9549d0f550f2`)
    const data = await response.json()
    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=${scale}&exclude=minutely,alerts&appid=76d5136cd55d14c88e4d9549d0f550f2`)
    const data2 = await response2.json()
    return [data,data2]  
}
        
const timeoutPromise = (delay) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            reject('Timeout')
        }, delay)
    })
}
// const response3 = await fetch('https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10')
// const data3 = await response3.json()
// console.log(data3)