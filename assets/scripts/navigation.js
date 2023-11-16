const NavigationToggle = document.querySelector('.nav-toggle')
const NavigationMenu = document.querySelector('.nav-menu')
const Content = document.querySelector('.content')

NavigationToggle.addEventListener('click', () => {
    NavigationToggle.classList.toggle('active')
    NavigationMenu.classList.toggle('active')
    Content.classList.toggle('active')
})