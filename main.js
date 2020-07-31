const navbar_menu = document.querySelector(".nav-items");
const hamburger_checkbox = document.querySelector("#hamburger-click");
const header = document.querySelector("header")
const navbar = document.querySelector(".navbar")
hamburger_checkbox.addEventListener('click', () => {
  navbar_menu.classList.toggle("active")
  header.classList.toggle("active")
});

const fixedNavbar = () => {
  (window.scrollY > 10) ? 
    navbar.classList.add("active") :
    navbar.classList.remove("active");
}
window.addEventListener('scroll', fixedNavbar)
