const form = document.querySelector("#js-form")


form.addEventListener('submit', event =>{
    event.preventDefault()
    const inputValue = event.target.input.value
    convertCityToHtml(inputValue);

    event.target.reset()
})