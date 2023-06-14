const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sideBar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slideCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')


let activesSlideIndex = 0
sideBar.style.top = `-${(slideCount-1)*100}vh`

upBtn.addEventListener('click', () => {
    changesSlide('up')
})

downBtn.addEventListener('click', () => {
    changesSlide('down')
})

function changesSlide(direction) {
    if(direction === 'up'){
        activesSlideIndex++
        if(activesSlideIndex === slideCount) {
            activesSlideIndex = 0
        }
    }else if (direction === 'down'){
        activesSlideIndex--
        if(activesSlideIndex < 0){
            activesSlideIndex = slideCount - 1 
        }
    }

    const height = container.clientHeight
        console.log(height)
    mainSlide.style.transform = `translateY(-${activesSlideIndex*height}px)`
    sideBar.style.transform = `translateY(${activesSlideIndex*height}px)` 
} 
