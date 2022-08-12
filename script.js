const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");

hamburger.onclick = function () {
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("active");
}