var headerContainer = document.getElementById("headerContainer");
var bodyContainer = document.getElementById("bodyContainer");
var footerContainer = document.getElementById("footerContainer");
var logoContainer = document.getElementById("logo");

asyncModuleFetcher(bodyContainer, "html/body/startpage.html");
asyncModuleFetcher(footerContainer, "html/footer/footer.html");

logoContainer.addEventListener("click", () => {
    asyncModuleFetcher(bodyContainer, "html/body/startpage.html");
    asyncModuleFetcher(footerContainer, "html/footer/footer.html");
});

var hamburgerMenu = document.getElementById("hamburgerMenu");
var hamburgerContentContainer = hamburgerMenu.getElementsByClassName("contentContainer")[0];
var hamburgerOpenBtn = document.getElementsByClassName("hamburgerMenu")[0];
var hamburgerCloseBtn = document.getElementsByClassName("closeBtn")[0];

hamburgerOpenBtn.addEventListener("click", () => {
    hamburgerMenu.removeAttribute("style");
    hamburgerMenu.setAttribute("class", "open");
});

hamburgerCloseBtn.addEventListener("click", () => {
    hamburgerMenu.setAttribute("style", "visibility:hidden;opacity:0");
    hamburgerMenu.removeAttribute("class");
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

