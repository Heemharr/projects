const article = document.getElementById('countries-list');
const search = document.getElementById('search');
const fullInfo = document.getElementById("full-info");
const DISPLAY_DETAILS = () => {
  //Array.from(article.children).map(item => {
  //item.addEventListener("click", function(){
  // console.log("yes")
  // }());
  //console.log(item)})

  //  fetch("https://restcountries.eu/rest/v2/all").then(resp => resp.json())
  //.then(data => {
  //let full = "";
  //data.map(datas => {
  //full += `<ul>
  //<li>Region:${datas.region}</li>
  //</ul>
  // `
  //})
  //article.innerHTML = full;
  // })
  //.catch(err => console.log(err))
}


async function getCountry() {
  const resp = await fetch('https://restcountries.eu/rest/v2/all');
  const data = await resp.json();
  let COUNTRY_INFO = [];
  data.forEach(datas => {
    COUNTRY_INFO.push(`
    <div class="country-container" onclick="DISPLAY_DETAILS()" value="${datas.alpha3Code}">
      <img class="country-flag" src="${datas.flag}">
      <ul>
        <li class="country-details"><p> ${datas.name}</p></li>
        <li class="country-details"><span>Population:</span>  ${datas.population}</li>
        <li class="country-details"><span>Region:</span> ${datas.region}</li>
        <li class="country-details"><span>Capital:</span> ${datas.capital}</li>
      </ul>
    </div>
    `);
  });
  article.innerHTML = COUNTRY_INFO.join('');
}

function Filter_Countries(event) {
  let searchInput = event.target.value.toLowerCase();
}

//search.addEventListener("keyup", Filter_Countries);
window.onload = function() {
  getCountry();
}