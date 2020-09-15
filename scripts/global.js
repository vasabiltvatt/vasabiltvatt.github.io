var headerContainer = document.getElementById("headerContainer");
var bodyContainer = document.getElementById("bodyContainer");
var footerContainer = document.getElementById("footerContainer");
var logoContainer = document.getElementById("logo");
var navBar = document.getElementsByClassName("nav")[0];

asyncModuleFetcher(bodyContainer, "html/body/startpage.html");

logoContainer.addEventListener("click", () => {
    asyncModuleFetcher(bodyContainer, "html/body/startpage.html");
});

var hamburgerMenu = document.getElementById("hamburgerMenu");
var hamburgerContentContainer = hamburgerMenu.getElementsByClassName("contentContainer")[0];
var hamburgerOpenBtn = document.getElementsByClassName("hamburgerMenu")[0];
var hamburgerCloseBtn = document.getElementsByClassName("closeBtn")[0];

hamburgerOpenBtn.addEventListener("click", () => {
    hamburgerMenu.removeAttribute("style");
    hamburgerMenu.setAttribute("class", "open");
    document.body.setAttribute("style", "overflow:hidden");
});

hamburgerCloseBtn.addEventListener("click", () => {
    hamburgerMenu.setAttribute("style", "visibility:hidden;opacity:0");
    hamburgerMenu.removeAttribute("class");
    document.body.removeAttribute("style");
});

(function areWeOpen() {
    var openingTimes = document.getElementsByClassName("openingTimes")[0].getElementsByTagName("p");
    var currDate = new Date();
    var currDay = openingTimes[currDate.getDay()-1];
    var openingDate = new Date();

    currDay.setAttribute("class", "highlightedDay");

    if(0 < currDate.getDay() < 6) {
        openingDate.setHours(18, 00);
        if(currDate > openingDate) {
            currDay.setAttribute("style", "background:#f00");
        }
    }
    else if(currDate.getDay() == 6) {
        openingDate.setHours(16, 00);
        if(currDate > openingDate) {
            currDay.setAttribute("style", "background:#f00");
        }
    }
    else {
        currDay.setAttribute("style", "background:#f00");
    }
})();

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 200) {
        if(headerContainer.getAttribute("class") == undefined) {
            headerContainer.setAttribute("class", "flexed");
            navBar.setAttribute("class", "nav flexed");
            hamburgerOpenBtn.setAttribute("class", "hamburgerMenu flexed");
        }

    }
    else {
        headerContainer.removeAttribute("class");
        navBar.setAttribute("class", "nav");
        hamburgerOpenBtn.setAttribute("class", "hamburgerMenu");
    }
});

schemaLoader("jsonDirSchema/navBarDirContent.json", menuDirContent => {
    var pair = Object.entries(menuDirContent);
    for(var i = 0; pair.length > i; i++) {

        var clickableP = document.createElement("p");
        clickableP.innerText = pair[i][0];

        clickableP.addEventListener("click", function (i) {
            asyncModuleFetcher(bodyContainer, pair[i][1]);
            hamburgerMenu.setAttribute("style", "visibility:hidden;opacity:0");
            hamburgerMenu.removeAttribute("class");
        }.bind(null, i));

        hamburgerContentContainer.appendChild(clickableP);

    }
});

