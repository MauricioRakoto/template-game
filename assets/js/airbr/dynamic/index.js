

const notifications = document.querySelectorAll(".top-side .notifications .items")
const profile = document.querySelector('.top-side .profiles .my-profile')
const modalProfile  = document.querySelector('.top-side .profiles .my-profile .modal')

notifications.forEach((notification) => {
    const icon = notification.querySelector('.icon')
    const modalNotification = notification.querySelector('.modal')

    icon.addEventListener('click',  showModalNotification)

    function showModalNotification  () {
        modalNotification.classList.toggle('show')
        modalNotification.style.transform = 'translateY(0)'
    }

})

profile.addEventListener('click', showModalProfile)

function showModalProfile () {
    modalProfile.classList.toggle('show')
    modalProfile.style.top = '40px'
}

const carouselNewGame = document.querySelector('.content .new-games .carousel .items')
const firstNewGame = carouselNewGame.querySelectorAll('.content .new-games .carousel .items .item')[0]
const arrowIconsNewGame = document.querySelectorAll('.content .new-games .carousel .icon')

let firstNewGameWidth = firstNewGame.clientWidth + 20

arrowIconsNewGame.forEach(icon => {
    icon.addEventListener('click', () => {
        console.log('click')
        carouselNewGame.scrollLeft += icon.id == "left" ? -firstNewGameWidth : firstNewGameWidth
        // // setTimeout(() => showHideIcons(), 60)
    })
})