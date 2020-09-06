//Set up function to async fetch modules from modules template folder

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

                container.innerHTML = this.responseText;
                var scripts = container.getElementsByTagName("script");
                for(var i=0; scripts.length > i; i++ ) {
                    eval(scripts[i].innerText);
                }

            }
        };

        xmlHttp.open("GET", "modules/" + module);
        xmlHttp.send(null);

    }

};

schemaLoader = (target, callback) => {
    if(target == undefined) {
        return "Target not specified";
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
                callback(JSON.parse(this.responseText));
            }
        };

        xmlHttp.open("GET", "modules/" + target);
        xmlHttp.send(null);

    }
};

