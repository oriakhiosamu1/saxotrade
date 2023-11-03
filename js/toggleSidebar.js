function toggleNav() {
    var navMenu = document.getElementById("nav-bar");
    var hamburgerButton = document.getElementById("hamburger-button");

    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
}
