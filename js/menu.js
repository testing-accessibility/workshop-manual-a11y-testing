function load() {
    const menuItems = Array.from(document.querySelectorAll('.megamenu-navitem'))
    const submenus = Array.from(document.querySelectorAll('.megamenu-section'))

    function resetSubmenus(event) {
        var activeSubmenu = document.querySelector('.megamenu-section.active')
        if (activeSubmenu && !activeSubmenu.contains(event.target)) {
            activeSubmenu.classList.remove('active')
        }
    }

    menuItems.forEach((menuItem, index) => {
        let parentElement = menuItem.parentNode
        menuItem.addEventListener('click', function(event) {
            console.log(menuItem)
            resetSubmenus(event)

            // Add active menu for the item clicked
            if(!parentElement.classList.contains('active')) {
                parentElement.classList.add('active')

            } else {
                parentElement.classList.remove('active')
            }
        })
    })

    document.addEventListener('click', (event) => {
        resetSubmenus(event)
    })
}
document.addEventListener('DOMContentLoaded', load)
