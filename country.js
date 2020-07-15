let article = document.getElementById('countries-list');
let search = document.getElementById('search');
const getCountryDetails = document.getElementById("getCountryDetails");
const fullInfo = document.getElementById("full-info");
const toggle = document.getElementById("toggle-check");
const toggleDarkMode = document.querySelector(".toggle-dark-mode");
const container = document.querySelector(".container");
let region = document.getElementById("region");
const goHome = document.getElementById("homepage");
const countryFullDetails = document.querySelector(".full-details-container");

const DARK_MODE = () => {
      document.body.classList.toggle("dark-mode");
    }
const getValue = async () => {
let selected = region.options[region.selectedIndex].value;
countryFullDetails.classList.add("active");
article.classList.remove("active")
//console.log(selected)
try {
const fetchRegion = await fetch(`
  https://restcountries.eu/rest/v2/region/${selected}`);
 const data = await fetchRegion.json();
 let COUNTRY_INFO = '';
      data.forEach(datas => {
       COUNTRY_INFO += `
    <div class="country-container slide-in-bottom">
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
// display country full details when searched
const DISPLAY_DETAILS = async () => {
  countryFullDetails.classList.remove("active");
  goHome.classList.remove("active");
  if (search.value === "") {
    document.querySelector(".search-error").innerHTML = "input a country name";
    document.querySelector(".search-error-two").innerHTML = "input a country name"
    getCountry();
  }
  try{
    article.classList.add("active");
    let val = search.value.toLowerCase().trim();
    let url = `https://restcountries.eu/rest/v2/name/${val}?fullText=true`;
    const resp = await fetch(url);
    const datas = await resp.json();
    console.log(datas);
        let full = "";
        datas.map(data => {
          full += `
          <button type="button" onclick="getCountry()" class="details-home-btn slide-out-left"><i class="fas fa-arrow-left" ></i>Back</button>
         <div class="country-fulldetails">
         <aside class="country-fulldetails-flag slide-in-left">
         <img src="${data.flag}"/>
         </aside>
         <aside class="country-fulldetails-info">
         <div>
         <h3 class="tracking-in-contract" >${data.name}</h3>
         </div>
         <div class="slide-in-bottom" >
          <ul>
            <li><span>Native Name:</span> ${data. demonym}</li>
            <li><span>Population:</span> ${data.population.toLocaleString()}</li>
            <li><span>Region:</span> ${data.region}</li>
            <li><span>Sub-Region:</span> ${data.subregion}</li>
            <li><span>Capital: </span>${data.capital}</li>
            </ul>
            <ul>
            <li><span>Currencies: </span> ${data.currencies[0].name}</li>
            <li><span>Languages: </span> ${data.languages[0].name}</li>
            <li><span>Top Level Domain: </span>${data.topLevelDomain}</li>
            <li><span>Timezone:</span> ${data.timezones[0]}</li>
             <li><span>Area:</span> ${data.area.toLocaleString()}</li>
          </ul>
          </div>
          </aside>
         </div>`.trim()}) 
         countryFullDetails.innerHTML = full;
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
        //if(datas.capital === "" || datas.capital === null){
         // return "none";
        //}
   
       COUNTRY_INFO += `
    <div class="country-container slide-in-bottom">
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
      article.classList.remove("active");
      goHome.classList.remove("active");
      countryFullDetails.classList.add("active");
    }
    
    
    document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector(".loader-container").style.visibility = "visible"; 
    } else { 
        document.querySelector(".loader-container").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible";
    } 
};
    
    
   window.onload = function() {
      getCountry();
   }
    