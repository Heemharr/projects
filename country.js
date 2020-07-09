const article = document.getElementById('countries-list');
    const search = document.getElementById('search');
    const fullInfo = document.getElementById("full-info");
    const DISPLAY_DETAILS = async () => {
      let g = article.firstChild.nextSibling.firstElementChild.value.toLowerCase();
      let url = `https://restcountries.eu/rest/v2/alpha/${g}`;
      const resp = await fetch(url);
      const data = resp.json();
      let full = "";
      full += `
             <button type="button" onclick="getCountry()">Back</button>
              
             <div>
             <img src=${data.flag}/>
             <h3>${data.name}</h3>
              <ul>
                <li><p>Native Name: ${data. demonym}</p></li>
                <li><p>Population: ${data.population}</p></li>
                <li><p>Region:${data.region}</p></li>
                <li><p>Sub-Region: ${data.subregion}</p></li>
                <li><p>Capital: ${data.capital}</p></li>
                <li><p>Top Level Domain: ${data.topLevelDomain}</p></li>
                <li><p>Currencies: ${data.currencies}</p></li>
                <li><p>Languages: ${data.languages}</p></li>
              </ul>
              <aside>
              <p>Border Countries:</p>
              <button type="button"> ${data.borders[0]}</button>
              <button type="button"> ${data.borders[1]}</button>
              <button type="button">${data.borders[2]}</button>
              </aside>
             </div>
             `;
      article.innerHTML = full;
    }
    
    const getCountry = async () => {
      const resp = await fetch('https://restcountries.eu/rest/v2/all');
      const data = await resp.json();
      let COUNTRY_INFO = [];
      data.forEach(datas => {
        COUNTRY_INFO.push(`
        <div class="country-container" onclick="DISPLAY_DETAILS()">
          <input type="hidden" value="${datas.alpha3Code}">
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