function menudisplayer() {
    //window.alert("Mijin");
    var menubtn = document.getElementById("ul");
    if (menubtn.classList == "" || menubtn.classList == "menu-up") {
        menubtn.classList.remove("menu-up");
        menubtn.classList.add("menu-small");
    } else {
        menubtn.classList.add("menu-up");
        setTimeout(function(){menubtn.classList.remove("menu-small"); menubtn.classList.remove("menu-up");}, 400);
    }
}


function executedl() {
    setTimeout(destroyloader, 3000);
}


function destroyloader() {
    document.getElementById("loader").remove();
    //window.alert("hola");
}

executedl();



function destroymenu() {
    var menubtn = document.getElementById("ul");
    if (menubtn.classList == "" || menubtn.classList == "menu-up") {
        menubtn.classList.remove("menu-up");
        menubtn.classList.add("menu-small");
    } else {
        menubtn.classList.add("menu-up");
        setTimeout(function(){menubtn.classList.remove("menu-small"); menubtn.classList.remove("menu-up");}, 400);
    }
}
