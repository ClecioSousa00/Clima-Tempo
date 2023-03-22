
const cityForm = document.querySelector('[data-js="search-location"]')

cityForm.addEventListener('submit', event =>{
    event.preventDefault()
    const inputValue = event.target.city.value
    showCityWeather(inputValue);
    localStorage.setItem('city', inputValue)
    event.target.reset()
})
