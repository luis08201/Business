window.addEventListener("scroll", () =>{
    let headerMain = document.getElementById("headerMain");
    headerMain.classList.toggle("sticky",window.scrollY > 0);
})
