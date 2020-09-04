asyncModuleFetcher("bodyContainer", "startpage");

var headerContainer = document.getElementById("headerContainer");
var bodyContainer = document.getElementById("bodyContainer");

var hamburgerMenu = document.getElementById("hamburgerMenu");
var hamburgerBtn = document.getElementsByClassName("hamburgerMenu")[0];

hamburgerBtn.addEventListener("click", () => {
    switch (hamburgerMenu.getAttribute("class")) {
        case null:
            hamburgerMenu.setAttribute("class", "open");
            document.body.setAttribute("style", "margin:unset;background:rgba(78,78,78,0.7)");
            break;
        case "open":
            hamburgerMenu.removeAttribute("class");
            document.body.setAttribute("style", "margin:unset;");
            break;
    }
});