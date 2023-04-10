window.addEventListener('scroll', function() {

    let header = document.querySelector(".header__section");
    let headerList = document.querySelector(".header__nav-list");

    if(pageYOffset >= 5) {
        header.classList.add("header__section--background");
        headerList.classList.add("header__nav-list--text-color");
    }

    if(pageYOffset >= 100) {
        header.classList.add("header__section--hide");
    }

    if(pageYOffset < 100) {
        header.classList.remove("header__section--hide");
    }

    if(pageYOffset < 5) {
        header.classList.remove("header__section--background");
        headerList.classList.remove("header__nav-list--text-color");
    }
    
  });