const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    // queremos que sea un numero asi que ponemos el + delante
    const value = e.target.value
    // el label lo escribimos justo después del input, por eso nextElementSibling
    const label = e.target.nextElementSibling


    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    // con esto sacamos la width del slider. pero porqué no cogemos style.width directamente?
    const label_width = getComputedStyle(label).getPropertyValue('width')
    
    // range_width deveulve "300px", queremos solo "300"
    // entonces cogemos lo que sea que haya dentro y quitamos el "px"
    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)
    
    // el max y min del slider, indicando en el <input> en el html. 100 y 0 en este caso
    const max = +e.target.max;
    const min = +e.target.min;

    // value * 300/100 - 40 = El % del valor menos la mitad del width del label nos da la posición del left en css
    // Si no ponemos el scale si nos desplaza demasiado
    const left = value * (num_width / max) - (num_label_width / 2) + scale(value, min, max, 10, -10);

    label.style.left = `${left}px`;

    console.log(left)

    label.innerHTML = value;

})


function scale(value, inMin, inMax, outMin, outMax) {
    const result = (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  
    return result;
  }