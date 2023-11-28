function toggleMenu(element) {
    const allMenus = document.querySelectorAll('.menu-container');
    allMenus.forEach(menu => {
        if (menu !== element) {
            menu.classList.remove("active");
        }
    });
    element.classList.toggle("active");
}