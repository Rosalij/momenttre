"use strict";  //rosali Johansson, Mittuniversitetet 2025-02-06
"use strict";

//code for mobile and tablet version, hamburgerbar show/hide
let openHamburgerEl = document.querySelector(".open-hamburger")
let closeHamburgerEl = document.querySelector(".close-hamburger")

openHamburgerEl.addEventListener("click", toggleMenu);
closeHamburgerEl.addEventListener("click", toggleMenu)

function toggleMenu() {
    let hamburgerMenuEl = document.querySelector(".hamburgermenu")
    let style = window.getComputedStyle(hamburgerMenuEl)
    if (style.display === "none") {
        hamburgerMenuEl.style.display = "block";
    }
    else {
        hamburgerMenuEl.style.display = "none";
    }
}
