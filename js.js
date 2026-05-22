const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");

});

/* =========================
SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
);

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



