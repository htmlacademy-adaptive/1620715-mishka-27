const headerNav = document.querySelector(".header__nav");
const headerNavToggle = document.querySelector(".header__nav-toggle");

headerNav.classList.remove("header__nav--no-js");
headerNavToggle.addEventListener("click", () => headerNav.classList.toggle("header__nav--open"));
