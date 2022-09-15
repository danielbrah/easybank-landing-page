'use strict';
const easyBankInfo = document.getElementById('why-choose-easybank-info')
const articles = document.getElementById('articles')
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

const observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry => {

        if (entry.isIntersecting)
        {
            console.log('Executed')
            Array.from(entry.target.children).forEach((entry, number) =>{
                entry.style.transitionDelay = `${(number / 4) - 0.05}s`
                entry.classList.toggle('active')
            })

            observer.unobserve(entry.target)
        }
    })
})

observer.observe(easyBankInfo)
observer.observe(articles)