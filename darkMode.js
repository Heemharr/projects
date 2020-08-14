//element selector
const selectElement = (selector) => {
  return document.querySelector(selector);
};

const html = document.getElementsByTagName('html')[0];
// dark-mode settings
const toggleDarkTheme = () => {
    html.dataset.theme = "darkMode";
    selectElement(".dark-mode").style.display = "none";
    selectElement(".light-mode").style.display = "block";
   localStorage.preferredMode = "darkMode";
    
};
selectElement(".dark-mode").addEventListener("click", toggleDarkTheme);

//lightMode settings
const toggleLightTheme = () => {
  html.dataset.theme = "lightMode";
    selectElement(".light-mode").style.display = "none";
    selectElement(".dark-mode").style.display = "block";
   localStorage.preferredMode = "lightMode";
};
// check light or dark mode 
const checkLightDark = () => {
  if(localStorage.preferredMode === "lightMode"){
    selectElement(".light-mode").style.display = "none";
  }
  if(localStorage.preferredMode === "darkMode"){
    selectElement(".dark-mode").style.display = "none";
  }
};
selectElement(".light-mode").addEventListener("click", toggleLightTheme);

window.addEventListener("DOMContentLoaded", () => {
checkLightDark();
html.dataset.theme = localStorage.preferredMode;
});