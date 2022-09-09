'use strict';
const hamburgerOpen = document.getElementById('hamburger-open')
const hamburgerClose = document.getElementById('hamburger-close')
const navMenu = document.getElementById('nav-menu')
const overlay = document.getElementById('overlay')

hamburgerOpen.addEventListener('click', () =>{
    hamburgerOpen.classList.toggle('active')
    hamburgerClose.classList.toggle('active')
    navMenu.classList.toggle('active')
    overlay.style.opacity = '0.5'
    overlay.style.visibility = 'visible'
})

hamburgerClose.addEventListener('click', () =>{
    hamburgerOpen.classList.toggle('active')
    hamburgerClose.classList.toggle('active')
    navMenu.classList.toggle('active')
    overlay.style.opacity = '0'
    overlay.style.visibility = 'hidden'
})