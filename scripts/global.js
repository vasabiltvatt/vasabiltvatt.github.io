var headerContainer = document.getElementById("headerContainer");
var bodyContainer = document.getElementById("bodyContainer");
var logoContainer = document.getElementById("logo");

asyncModuleFetcher(bodyContainer, "html/startpage.html");

logoContainer.addEventListener("click", () => {
    asyncModuleFetcher(bodyContainer, "html/startpage.html");
});

var hamburgerMenu = document.getElementById("hamburgerMenu");
var hamburgerContentContainer = hamburgerMenu.getElementsByClassName("contentContainer")[0];
var hamburgerOpenBtn = document.getElementsByClassName("hamburgerMenu")[0];
var hamburgerCloseBtn = document.getElementsByClassName("closeBtn")[0];

hamburgerOpenBtn.addEventListener("click", () => {
    hamburgerMenu.setAttribute("class", "open");
});

hamburgerCloseBtn.addEventListener("click", () => {
    hamburgerMenu.removeAttribute("class");
});

dirContentFetcher("navBarDirContent.json", menuDirContent => {
    var pair = Object.entries(menuDirContent);
    for(var i = 0; pair.length > i; i++) {

        var clickableP = document.createElement("p");
        clickableP.innerText = pair[i][0];

        clickableP.addEventListener("click", function (i) {
            asyncModuleFetcher(bodyContainer, pair[i][1]);
            hamburgerMenu.removeAttribute("class");
        }.bind(null, i));

        hamburgerContentContainer.appendChild(clickableP);

    }
});