let countries = [];

document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://restcountries.eu/rest/v2/all'; // este ese el link copiado
  makeRequest(url, requestComplete); // se pasa la url y la callback function requestComplete QUIEN ES LA FUNCTION OBJECT!!!

const select = document.querySelector('#select-countries')
  select.addEventListener('change', function () {
    const selectedCountry = countries[this.value]
    displayCountryInfo(selectedCountry);
    displayMatchingCountries(countries);
  })

  // const button = document.querySelector('#button');
  // button.addEventListener('click', () => { // si lo hubiese hecho asi "button.addEventListener('click', makerequest)"
  // makeRequest(url, requestComplete); // la funcion hubiese hecho el display de los countries de una vez
// });
});

const makeRequest = function (url, callback){
  //1. we need to create an instance of the object
  const request = new XMLHttpRequest();
  //2. initialize the object
  request.open('GET', url); // se coloca el verbo y el url donde se quiere hacer el request
  request.send(); // aqui se envia el request

  request.addEventListener('load', callback);
}

const requestComplete = function (){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  // console.log(jsonString); // esto te da un objeto inleible
  countries = JSON.parse(jsonString) // esto nos da un "usable JS object"
  // const country = countries[0];
  populateList(countries);
}

const populateList = function (countries) {  // esto sera un unordered list de los countries
  const select = document.querySelector('#select-countries')

  countries.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index
    select.appendChild(option);
    // console.log(countries)
  });
}

const displayCountryInfo = function (country) {
  const container = document.querySelector('#country-info');
  container.innerHTML = '';

  const countryList = document.createElement('ul');

  const nameLi = document.createElement('li');
  const populationLi = document.createElement('li');
  const capitalLi = document.createElement('li');
  const borderLi = document.createElement('li');
  const borderNames = document.createElement('li');

  nameLi.textContent = country.name;
  populationLi.textContent = country.population;
  capitalLi.textContent = country.capital;
  borderLi.textContent = country.borders;
  // borderNames.textContent =;

  container.appendChild(countryList);
  countryList.appendChild(nameLi);
  countryList.appendChild(populationLi);
  countryList.appendChild(capitalLi);
  countryList.appendChild(borderLi);
  // countryList.appendChild(borderNames);

  let matchingCountries = countries.filter((otherCountry) => {
    return country.borders.includes(otherCountry.alpha3Code);
  });

  }

// return  countries;
const displayMatchingCountries = function (matchingCountries) {  // esto sera un unordered list de los countries
  const container = document.querySelector('#countryborder-info');
  container.innerHTML = '';
    matchingCountries.forEach((country, index) => {
      const selected = document.createElement('selected');
      selected.textContent = matchingCountries.name;
      selected.value = index
      select.appendChild(selected);
    })
  console.log(container)
  //
  // countries.forEach((country, index) => {
  //   const option = document.createElement('option');
  //   option.textContent = country.name;
  //   option.value = index
  //   select.appendChild(option);
  //   // console.log(countries)
  // });
}







// const populateList = function (countries) {  // esto sera un unordered list de los countries
//   const ul = document.querySelector('#country-list')
//
//   countries.forEach((country) => {
//     const li = document.createElement('li');
//     li.textContent = country.name;
//     ul.appendChild(li);
//   });
