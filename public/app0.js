// THIS CODE DISPLAYS A LIST OF ALL THE COUNTRIES WHEN THE BUTTON IS CLICKED



document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://restcountries.eu/rest/v2/all'; // este ese el link copiado
  // makeRequest(url, requestComplete); // se pasa la url y la callback function requestComplete QUIEN ES LA FUNCTION OBJECT!!!

const button = document.querySelector('#button');
button.addEventListener('click', () => { // si lo hubiese hecho asi "button.addEventListener('click', makerequest)"
makeRequest(url, requestComplete); // la funcion hubiese hecho el display de los countries de una vez
});
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
  const countries = JSON.parse(jsonString) // esto nos da un "usable JS object"
  // const country = countries[0];
  populateList(countries);
}

const populateList = function (countries) {  // esto sera un unordered list de los countries
  const ul = document.querySelector('#country-list')

  countries.forEach((country) => {
    const li = document.createElement('li');
    li.textContent = country.name;
    // const cioc = country.cioc
    // ul.value = cioc
    ul.appendChild(li);
    // console.log(countries)
  });
}
