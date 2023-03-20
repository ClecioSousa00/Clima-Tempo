
const image = document.querySelector('#js-image')
const weather = document.querySelector('#js-weather')
const temp = document.querySelector('#js-temp')

const convertCityToHtml = async inputCity =>{
    const city = await getCityWeather(inputCity)
    image.setAttribute('src', `https://openweathermap.org/img/wn/${city.weather[0].icon}.png`)
    weather.textContent = `${city.weather[0].description}`
    temp.textContent = `${parseInt(city.main.temp)}°C`
    
}

