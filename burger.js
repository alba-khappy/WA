document.querySelector(".header__button-burger").addEventListener("click", function() {
    document.querySelector(".header__nav-list").classList.add("header__nav-list--show"); 
    document.querySelector(".header__section").classList.add("header__section--burger-opened"); 
    document.querySelector(".header__nav-list").style.left = '0'; 
  });

document.querySelector(".nav-button-close").addEventListener("click", function() {
    document.querySelector(".header__nav-list").style.left = '100%';
    document.querySelector(".header__section").classList.remove("header__section--burger-opened"); 
  });