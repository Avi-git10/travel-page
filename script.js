const hamburgerElement = document.getElementById("hamburger");
hamburgerElement.addEventListener("click", function() {
    hamburgerElement.classList.toggle("open");
    document.getElementById("navbar").classList.toggle("lapFirstNavBg");
    document.querySelector(".lapFirstNav").classList.toggle("lapFirstOpen");
    const liDestAbout = document.querySelectorAll(".lapFirstNav");
    liDestAbout.forEach((item) => (item.classList.toggle("lapFirstOpen")));
});