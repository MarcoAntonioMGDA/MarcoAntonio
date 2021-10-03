function menudisplayer() {
    //window.alert("Display Message");
    var menubtn = document.getElementsByTagName("HEADER")[0];
    //var menubtn = document.getElementById("nav");
    if (menubtn.classList == "" || menubtn.classList == "desactivate-menu") {
        menubtn.classList.remove("desactivate-menu");
        menubtn.classList.add("active-menu");
    } else {
        menubtn.classList.add("desactivate-menu");
        setTimeout(function(){menubtn.classList.remove("active-menu"); menubtn.classList.remove("desactivate-menu");}, 500);
    }
}

function destroymenu() {
    //window.alert("Display Message");
    var menubtn = document.getElementById("nav");
    if (menubtn.classList == "" || menubtn.classList == "desactivate-menu") {
        menubtn.classList.remove("desactivate-menu");
        menubtn.classList.add("active-menu");
    } else {
        menubtn.classList.add("desactivate-menu");
        setTimeout(function(){menubtn.classList.remove("active-menu"); menubtn.classList.remove("desactivate-menu");}, 500);
    }
}

function destroymenu2() {
    //window.alert("Display Message");
    var menubtn = document.getElementsByTagName("HEADER")[0];
    //var menubtn = document.getElementById("nav");
    if (menubtn.classList == "") {
        
    }
    else {
        menubtn.classList.add("desactivate-menu");
        setTimeout(function(){menubtn.classList.remove("active-menu"); menubtn.classList.remove("desactivate-menu");}, 500);
    }
        
}