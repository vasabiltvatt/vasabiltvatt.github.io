//Set up function to async fetch modules from html template folder

asyncModuleFetcher = (container, module) => {

    if(container == undefined || module == undefined) {
        return "Parent container or module not specified";
    }
    else {

        if(window.XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        }
        else {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlHttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {

                let containerElement = document.getElementById(container);
                containerElement.innerHTML = this.responseText;

            }
        };

        xmlHttp.open("GET", "html/" + module + ".html");
        xmlHttp.send(null);

    }

};