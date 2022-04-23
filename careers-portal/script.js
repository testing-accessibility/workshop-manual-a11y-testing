const load = () => {
    const profileBtn = document.querySelector('.profile-menu .button')
    const settingsBtns = Array.from(document.querySelectorAll('.btn-settings'))
    const filterBtn = document.querySelector('.btn-filters')
    
    profileBtn.addEventListener('click', () => {
        profileBtn.parentNode.classList.toggle('active')
    })

    settingsBtns.forEach((button, index) => {
        button.addEventListener('click', (event) => {
            window.confirm('Confirm Your Settings')
        })
    })
    filterBtn.addEventListener('click', (event) => {
        window.confirm('Filter Results')
    })
}

document.addEventListener('DOMContentLoaded', load)
