const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 10
const cols = 3

for(let i=0; i < rows * cols; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}/${getRandomSize()}`
    container.appendChild(img)
}

// Para completar la URL, eg. https://source.unsplash.com/random/300x305
function getRandomSize() {
    return `${getRandomNumber()}x${getRandomNumber()}`
}

// Numero random entre 300 y 310
function getRandomNumber() {
    return (Math.floor(Math.random() * 10 ) + 300)
}