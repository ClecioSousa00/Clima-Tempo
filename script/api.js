
const apiKey = '59c42645ba81e154239f1f82c8062896'
const msgError = document.querySelector('[data-js="error"]')

const getCityWeather = async city =>{
    msgError.textContent = ''
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
    
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('Não foi possível obter os dados')
        }
        return await response.json()
    } catch (error) {
        msgError.textContent = error.message 
    }
}


