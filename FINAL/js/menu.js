var menuOpened = false;

function openMenu() {
    var x = document.getElementsByClassName("menu");
    if (menuOpened == false) {
        x[0].className += " opened";
        menuOpened = true;
        x[0].style.backgroundColor = "rgba(100, 100, 100, 0.4)";
    }
    else if (menuOpened == true) {
        x[0].className = "fa fa-bars menu";
        menuOpened = false;
        x[0].style.backgroundColor = "transparent";
    }
}

$(document).click(function(event) { 
    if (!$(event.target).closest('.menu').length) {
        if (menuOpened == true) {
            openMenu();
        }
    }        
})