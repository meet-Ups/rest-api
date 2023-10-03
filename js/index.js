// const url = 'https://restcountries.com/v3.1/nigeria'

const btn = document.querySelector('.btn')
const input = document.getElementById('input')
const form = document.querySelector('.form')
const container = document.querySelector('.container')


// const url = 'https://restcountries.com/v3.1/name/nigeria'


const handleSubmit = (e) => {
  e.preventDefault()
  const countryName = input.value;
  const url = ` https://restcountries.com/v3.1/name/${countryName}`
  const getCountries = async () => {

    try {
      const response = await fetch(url)
      const data = await response.json()
      const country = data[0]
      if (!country) {
        throw new Error('country does not exist')
      }

      const html = ` <img src=${country?.flags.png} alt=${country.flags.alt}>
        <h2>${country?.name.common}</h2>
        <p><span>population:</span>${country?.population}</p>
        <p>${country?.capital || 'not found'}</p>
        
        `
      container.innerHTML = html
    } catch (error) {
      container.innerHTML = error.message
    }


  }
  input.value = ''
  getCountries()

}

form.addEventListener('submit', handleSubmit)