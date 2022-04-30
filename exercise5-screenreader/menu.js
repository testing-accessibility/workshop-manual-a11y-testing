function load() {
    var menuItems = Array.from(document.querySelectorAll('.megamenu-navitem'))
    var submenus = Array.from(document.querySelectorAll('.megamenu-section'))

    function resetSubmenus(event) {
        var activeSubmenu = document.querySelector('.megamenu-section.active')
        if (activeSubmenu && !activeSubmenu.contains(event.target)) {
            activeSubmenu.classList.remove('active')
        }
    }
    menuItems.forEach((menuItem, index) => {
        let parentElement = menuItem.parentNode.parentNode
        menuItem.addEventListener('click', function(event) {
            resetSubmenus(event)

            // Add active menu for the item clicked
            if(!parentElement.classList.contains('active')) {
                parentElement.classList.add('active')
                menuItem.setAttribute('aria-expanded', 'true')
            } else {
                parentElement.classList.remove('active')
                menuItem.setAttribute('aria-expanded', 'false')
            }
        })
    })
    submenus.forEach((submenu) => {
        // Bind escape key to close and handle focus
        submenu.addEventListener('keyup', (event) => {
            if (event.key === 'Escape' && submenu.classList.contains('active')) {
                submenu.classList.remove('active')
                submenu.querySelector('.megamenu-navitem').focus()
            }
        })
    })
    document.addEventListener('click', (event) => {
        resetSubmenus(event)
    })
}

document.addEventListener('DOMContentLoaded', load)