/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})

/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 400) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== HIDE BLOG DOPO TRE DIV ===============*/
$(document).ready(function() {



    $("#load").on("click", function(e) {
        e.preventDefault();
        $(".blog__data:hidden").slice(0, 3).slideDown();
        if ($(".blog__data:hidden").length == 0) {
            $("#load").text("No More")
        }
    });
})


/*=============== SHOW/HIDE CATEGORY===============*/

const categoryButton = document.getElementById('categories-button')
const category = document.getElementById("h_categories")
const openCategory = 'categories'
const iconCategory = 'uil-arrow-down'

const selectedcategory = localStorage.getItem('selected-category')
const selectedCat = localStorage.getItem('selected-cat')

const getCurrentcategory = () => category.classList.contains(openCategory) ? 'open' : 'close'
const getCurrentCat = () => categoryButton.classList.contains(iconCategory) ? 'uil-arrow-right' : 'uil-arrow-down'

if (selectedCat) {
    category.classList[selectedcategory === 'open' ? 'add' : 'remove'](openCategory)
    categoryButton.classList[selectedCat === 'uil-arrow-right' ? 'add' : 'remove'](iconCategory)
}

categoryButton.addEventListener('click', () => {
    category.classList.toggle(openCategory)
    categoryButton.classList.toggle(iconCategory)
    localStorage.setItem('selected-category', getCurrentcategory())
    localStorage.setItem('selected-cat', getCurrentCat())
})

const linkWork = document.querySelectorAll('.recipe__item')

function activeWork() {
    linkWork.forEach(L => L.classList.remove('active-recipe'))
    this.classList.add('active-recipe')
}
linkWork.forEach(L => L.addEventListener('click', activeWork))