const textEl =  document.getElementById('text');
const speedEL = document.getElementById('speed');
const text = 'We love programming!'

let idx = 1;
// Milisegundos cada cuales se escribe una letra más
let speed = 300 / speedEL.value;

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx);
    idx++;
    // Cuando llegamos al final del string, lo resetearemos
    if(idx > text.length) {
        idx = 1
    }

    // Para repetirlo infinitamente
    setTimeout(writeText, speed)
}

speedEL.addEventListener('input',(e) => {
    speed = 300 / e.target.value
})