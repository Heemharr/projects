const article = document.getElementById('countries-list');
const search = document.getElementById('search');
const fullInfo = document.getElementById("full-info");
const toggle = document.getElementById("toggle-check");
const toggleDarkMode = document.querySelector(".toggle-dark-mode");
const container = document.querySelector(".container");
let region = document.getElementById("region");
const goHome = document.getElementById("homepage");

const DARK_MODE = () => {
      document.body.classList.toggle("dark-mode");
    }
    
const getValue = async () => {
let selected = region.options[region.selectedIndex].value;
try {
const fetchRegion = await fetch(`
  https://restcountries.eu/rest/v2/region/${selected}`);
 const data = await fetchRegion.json();
 let COUNTRY_INFO = '';
      data.forEach(datas => {
       COUNTRY_INFO += `
    <div class="country-container" onclick="DISPLAY_DETAILS()">
      <input type="hidden" value="${datas.alpha3Code}">
      <img class="country-flag" src="${datas.flag}">
      <ul>
        <li class="country-name"><p> ${datas.name}</p></li>
        <li class="country-details"><span>Population:</span>  ${datas.population.toLocaleString()}</li>
        <li class="country-details"><span>Region:</span> ${datas.region}</li>
        <li class="country-details"><span>Capital:</span> ${datas.capital}</li>
      </ul>
    </div>
    `;
      })
    article.innerHTML = COUNTRY_INFO;
}
catch(error){
  console.log(error);
}
goHome.classList.add("active")
}

const DISPLAY_DETAILS = async () => {
  try{
    let g = article.firstChild.nextSibling.firstElementChild.value.toLowerCase();
    console.log(g);
    
    let url = `https://restcountries.eu/rest/v2/alpha/${g}`;
    const resp = await fetch(url);
    const data = await resp.json();
        let full = "";
          full += `
         <div>
         <img src=${data.flag}/>
         <h3>${data.name}</h3>
          <ul>
            <li><p>Native Name: ${data. demonym}</p></li>
            <li><p>Population: ${data.population.toLocaleString()}</p></li>
            <li><p>Region:${data.region}</p></li>
            <li><p>Sub-Region: ${data.subregion}</p></li>
            <li><p>Capital: ${data.capital}</p></li>
            <li><p>Top Level Domain: ${data.topLevelDomain}</p></li>
            <li><p>Currencies: ${data.currencies[0].name}</p></li>
            <li><p>Languages: <span> ${data.languages[0].name}</span>, <span> ${data.languages[1].name}</span>,  <span> ${data.languages[2].name}</span></p></li>
          </ul>
          <aside>
          <p>Border Countries:</p>
          <button type="button"> ${data.borders[0]}</button>
          <button type="button"> ${data.borders[1]}</button>
          <button type="button">${data.borders[2]}</button>
          </aside>
         </div> `
         article.innerHTML = full;
         } 
        catch(error){
          console.log(error)
        }
    }

    const getCountry = async () => {
      try {
      const resp = await fetch('https://restcountries.eu/rest/v2/all');
      const data = await resp.json();
      let COUNTRY_INFO = '';
      data.forEach(datas => {
       COUNTRY_INFO += `
    <div class="country-container" onclick="DISPLAY_DETAILS()">
      <input type="hidden" value="${datas.alpha3Code}">
      <img class="country-flag" src="${datas.flag}">
      <ul>
      <li class="country-name"><p> ${datas.name}</p></li>
      <li class="country-details"><span>Population:</span>  ${datas.population.toLocaleString()}</li>
      <li class="country-details"><span>Region:</span> ${datas.region}</li>
      <li class="country-details"><span>Capital:</span> ${datas.capital}</li>
      </ul>
    </div>
    `;
      })
      article.innerHTML = COUNTRY_INFO;
      }
      catch(error){
        console.log(error);
      }
      goHome.classList.remove("active")
    }
    function Filter_Countries(event) {
      let searchInput = event.target.value.toLowerCase();
      let items;
    }
    window.onload = function() {
      getCountry();
    }