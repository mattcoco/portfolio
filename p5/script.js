const loadText = document.querySelector(".loading-text");
const bg = document.querySelector('.bg');

let load = 0;

// setInterval(f,s) : ejecuta la funcion f cada s milisecs
let int = setInterval(blurring, 30);

// La funcion blurring aumenta 1 la variable load
// cada vez que se llama
function blurring() {
    load++;

    if(load > 99) {

        // clearInterval escapa de la funcion setInterval
        clearInterval(int);
    }

    loadText.innerText = `${load}%`

    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// Mapeado de 0 to 100 en 1 to 0, para la opacidad
// parametros: el numero que cambia, la escala de entrada
// (min y max) y la escala de salida (min y max)
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}