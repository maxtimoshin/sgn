// Buttons 

const aboutBtn = document.querySelectorAll('.about-project-btn')
const mechBtn = document.querySelectorAll('.mechanic-btn')
const testBtn = document.querySelectorAll('.test-btn')
const resultsBtn = document.querySelectorAll('.results-btn')
const pricesBtn = document.querySelectorAll('.prices-btn')
const instantBuyBtn = document.querySelectorAll('.instant-buy-btn')
const headerBtn = document.querySelectorAll('.logo-btn')

// Burger Items

const iconMenu = document.querySelector('.menu-icon')
const menuBody = document.querySelector('.menu-body')

// Image fullscreen modal

const sliderImages = document.querySelectorAll('.resize-image')
const modal = document.querySelector('.modal')
const modalImage = document.querySelector('.modal-image')

// Blocks

const aboutBlock = document.querySelector('.about-us-container')
const testBlock = document.querySelector('.test-period-container')
const resultsBlock = document.querySelector('.results-container')
const pricesBlock = document.querySelector('.prices-container')
const headerBlock = document.querySelector('.header')
const connectionBlock = document.querySelector('.service-connection-container')

// Scroll To

function scrollingToBlock(btn, block) {
    btn.forEach(e => {
        e.addEventListener('click', () => {
            block.scrollIntoView({ block: "center", behavior: "smooth" })
            document.body.classList.remove('lock')
            iconMenu.classList.remove('activem')
            menuBody.classList.remove('activem')
        })
    })
}

// ScrollTo listeners

scrollingToBlock(aboutBtn, aboutBlock)
scrollingToBlock(testBtn, testBlock)
scrollingToBlock(resultsBtn, resultsBlock)
scrollingToBlock(pricesBtn, pricesBlock)
scrollingToBlock(headerBtn, headerBlock)
scrollingToBlock(mechBtn, connectionBlock)

// Burger logic toggler 

if (iconMenu) {
    iconMenu.addEventListener('click', (e) => {
        document.body.classList.toggle('lock')
        iconMenu.classList.toggle('activem')
        menuBody.classList.toggle('activem')
    })
}

// Image fullscreen modal logic

if (sliderImages) {
    sliderImages.forEach(e => {
        e.addEventListener('click', () => {
            modalImage.src = e.src
            modal.style.display = "flex"
            document.body.classList.add('lock')
        })
    })
    modal.addEventListener('click', () => {
        modal.style.display = "none"
        document.body.classList.remove('lock')
    })
}