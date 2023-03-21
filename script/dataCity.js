
const image = document.querySelector('#js-image')
const weather = document.querySelector('#js-weather')
const temp = document.querySelector('#js-temp')
const speed = document.querySelector('#js-wind-speed')
const porcent = document.querySelector('#js-porcent')
const cityEl = document.querySelector('#js-city')
const country = document.querySelector('#js-country')

const convertCityToHtml = async inputCity =>{
    const city = await getCityWeather(inputCity)
    image.setAttribute('src', `https://openweathermap.org/img/wn/${city.weather[0].icon}.png`)
    weather.textContent = `${city.weather[0].description}`
    temp.textContent = `${parseInt(city.main.temp)}°C`
    speed.textContent = `${city.wind.speed}km/h`
    porcent.textContent = `${city.main.humidity}%`
    cityEl.textContent = `${city.name}`
    country.textContent = `${city.sys.country}`
}

