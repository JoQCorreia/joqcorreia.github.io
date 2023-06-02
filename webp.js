let bing = document.getElementById('hamburger-menu')

bing.addEventListener("click", work);

let menu = document.getElementById("hidden-menu");
menu.style.display = "none";

function work(bing){

    if (menu.style.display === "none"){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
};