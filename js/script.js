function loadCountries(){
   fetch('https://restcountries.com/v2/all')
   .then(res => res.json())
   .then(data => displayCountries(data));
}
loadCountries();

function displayCountries(countries){
   for (const country of countries) {
    //    console.log(country.name)
       const countriesShow = document.getElementById('countriesShow');
       const div = document.createElement('div');
       div.classList.add('country')
       div.innerHTML = 
        `
        <h3>Name: ${country.name}</h3>
        <p>Capital: ${country.capital}</p>
        <button onclick="loadCountryDetails('${country.name}')">Details</button>
            
        `;
       countriesShow.appendChild(div);
   }
}

function loadCountryDetails(name){
    fetch(`https://restcountries.com/v2/name/${name}`)
   .then(res => res.json())
   .then(data => detailsShow(data[0]));
}
loadCountryDetails();

function detailsShow(country){
    // console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
        <h2>${country.name}</h2>
        <p>population: ${country.population}</p>
        <img width="200px" src="${country.flag}">
    `
}