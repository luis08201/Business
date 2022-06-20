let menuHamburger = document.getElementById("menuBtn");

menuHamburger.addEventListener("click", function(){
    menuHamburger.classList.toggle("active");
    let nav = document.getElementById("nav");
    nav.classList.toggle("active");
    let headerMain = document.getElementById("headerMain");
    headerMain.classList.toggle("active");
})