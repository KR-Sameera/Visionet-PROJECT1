document.addEventListener("DOMContentLoaded", () =>{
    const navMenu = document.getElementById('nav_links'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close');

    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show_menu');
        });
    }

    if(navClose){
        navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show_menu');
    });
}
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("showHeader");
        } else {
            navbar.classList.remove("showHeader");
        }
    });
});
