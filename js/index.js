// Updating year in footer to current year
let yearText = document.querySelector('.copyright-year')
let currentYear = new Date().getFullYear()
yearText.textContent = currentYear

// Make mobile navigation work

let btnMobileNav = document.querySelector('.btn-mobile-nav')
let header = document.querySelector('.header-nav')

btnMobileNav.addEventListener('click',()=>{
    header.classList.toggle('nav-open')
})