asyncModuleFetcher("bodyContainer", "startpage");

var headerContainer = document.getElementById("headerContainer");
var bodyContainer = document.getElementById("bodyContainer");

var hamburgerMenu = document.getElementById("hamburgerMenu");
var hamburgerOpenBtn = document.getElementsByClassName("hamburgerMenu")[0];
var hamburgerCloseBtn = document.getElementsByClassName("closeBtn")[0];

hamburgerOpenBtn.addEventListener("click", () => {
    hamburgerMenu.setAttribute("class", "open");
});

hamburgerCloseBtn.addEventListener("click", () => {
    hamburgerMenu.removeAttribute("class");
});