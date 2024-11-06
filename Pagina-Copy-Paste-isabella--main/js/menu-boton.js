function initializeMenu() {
    const menuButton = document.getElementById('menu-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const resourcesItem = document.getElementById('resources-item');
    const resourcesSubmenu = document.getElementById('resources-submenu');

    if (menuButton && dropdownMenu && resourcesItem && resourcesSubmenu) {
        // Muestra y oculta el menú principal
        menuButton.addEventListener('click', (event) => {
            dropdownMenu.classList.toggle('show-menu');
        });

        // Muestra y oculta el submenú de "Recursos"
        resourcesItem.addEventListener('click', (event) => {
            event.stopPropagation();
            resourcesItem.classList.toggle('show-submenu'); // Alterna la clase en resourcesItem
        });

        // Cierra el menú y submenú al hacer clic fuera de ellos
        document.addEventListener('click', (event) => {
            const isClickInsideMenu = dropdownMenu.contains(event.target) || menuButton.contains(event.target);
            if (!isClickInsideMenu) {
                dropdownMenu.classList.remove('show-menu');
                resourcesItem.classList.remove('show-submenu'); // Asegura que el submenú también se oculte
            }
        });
    } else {
        console.error("No se encontró uno o más elementos del menú en el DOM.");
    }
}


















