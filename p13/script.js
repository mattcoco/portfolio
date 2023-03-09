const tagsEL = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// esto hace que el focus se ponga en el textarea y que
// podamos empezar a escribir right away
textarea.focus();

//keyup es cuando soltamos una tecla
textarea.addEventListener('keyup', (e) => {
    // o sea, cada vez que soltamos una tecla esto se ejecuta
    createTags(e.target.value)
    //Ahora, para la random select functionality. If we hit enter
    if(e.key === 'Enter') {
        //esperamos 10 ms
        setTimeout(
            //ponemos una arrow function
            () => {
                //limpiamos el textarea (o sea, el input value)
                e.target.value = '';
            }, 10);
        randomSelect();
    }
})

function createTags (input) {
    //ver abajo creacion de esta funcion por partes
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    //we clear the tags so they don't pile up
    tagsEL.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEL.appendChild(tagEl);
    });
    
}

// para separar el array tags por comas
//   const tags = input.split(',')
// para no admitir espacios. "Filter is a high order array method that allow you to return certains things based on a conditional". Explicación en t3:15 del video #043
//  .filter(tag => tag.trim() !== '')

function randomSelect() {
    //las veces que iluminarán los tags, es decir las veces que se aplicará la clase highlight
    const times = 30;

    //vamos a tener que poner un interval porque la acción de "poner el tag highlight y quitarlo" se repetirá TIMES veces    
    const interval = setInterval(() => {
        //Leemos primero el 100ms de abajo. Cada 0.1s aplicaremos esto
        //Definida abajo; devueve un elemento de clase .tag aleatorio
        const randomTag = pickRandomTag();
        //Definida abajo; y le añade la case .highlight
        highlightTag(randomTag);

        setTimeout(() => {
            unhighlightTag(randomTag);
            // 0.1s después, le quitamos el .highlight
            //Es decir, cada 0.1 ponemos y quitamos un highlight a clases diferentes!
        }, 100);
        //Esto se lee primero: cada 0.1s...
    }, 100);

    setTimeout(() => {
        //"When you have an interval that runs, we have a function clearInterval to stop it, so we want to pass in our interval"
        clearInterval(interval);

        //Para PARAR en una random tag
        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 100);
        //Queremos que funcione nuestro TIMES * 0.1s, el tiempo que hemos deifnido antes
    }, times * 100);
}

//Función que recoge todos las clases .tag del HTML y devuelve uno aleatorio de entre ellos 
function pickRandomTag() {
    //le damos todos los elementos con la clase tag (todos los spans que generamos)
    const tags = document.querySelectorAll('.tag');
    //usamos [] porque hemos cogido un nodelist, similar a un array; lo de dentro es un index del array tags
    //floor para redondear hacia abajo, Math.random da un decimal aleatorio y length para la length del array. O sea, nos da un indice aleatorio comprendido dentro de tags
    return tags[Math.floor(Math.random() * tags.length)];
}

//Dos funciones para añadir la clase highlight y quitarla; solo para limpiar codigo
function highlightTag(tag) {
    tag.classList.add('highlight');
}
function unhighlightTag(tag) {
    tag.classList.remove('highlight');
}