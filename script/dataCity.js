
const icon = document.querySelector('#js-icon')
const weather = document.querySelector('#js-weather')
const temperature = document.querySelector('#js-temp')
const speedWind = document.querySelector('#js-wind-speed')
const percentage = document.querySelector('#js-porcent')
const cityName = document.querySelector('#js-city')
const country = document.querySelector('#js-country')

const showCityWeather = async inputCity =>{
    const city = await getCityWeather(inputCity)
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${city.weather[0].icon}.png`)
    weather.textContent = `${city.weather[0].description}`
    temperature.textContent = `${parseInt(city.main.temp)}°C`
    speedWind.textContent = `${city.wind.speed}km/h`
    percentage.textContent = `${city.main.humidity}%`
    cityName.textContent = `${city.name}`
    country.textContent = `${city.sys.country}`
}
const showLocalStorageCity = ()=>{
    const city = localStorage.getItem('city')
    if (city) {
        showCityWeather(city)
    }
}

showLocalStorageCity()