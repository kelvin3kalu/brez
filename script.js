function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    if (menu.classList.contains("active")) {
        menu.classList.remove("active"); // Slide sidebar out
    } else {
        menu.classList.add("active"); // Slide sidebar in
    }
    console.log(menu);
}