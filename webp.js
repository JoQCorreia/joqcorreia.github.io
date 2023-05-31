console.log("test");

let bing = document.getElementById('hamburger-menu').onclick

function work(bing) {
    let menu = document.getElementById("hidden-menu");
    console.log(menu);
    if (menu.style.display === "none"){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
};