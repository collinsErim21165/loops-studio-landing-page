// const hamburger = document.querySelector(".hamburger");
// const navlinks = document.querySelector(".nav-links");

// hamburger.onclick = function () {
//     hamburger.classList.toggle("active");
//     navlinks.classList.toggle("active");
// }

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex"
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "none"
}