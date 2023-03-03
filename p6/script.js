// los pone en un node list
const boxes = document.querySelectorAll('.box')

// y queremos add un event when we scroll
window.addEventListener('scroll', checkBoxes);

checkBoxes;

function checkBoxes() {
    //we need to figure out the trigger point
    // console.log(window.innerHeight); nos da 600, la altura
    // de la ventana

    const triggerBottom = window.innerHeight / 5 * 4;
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        //returns a rectangle con su posicion en el DOM
        //el .top es la coordenada de arriba
        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}
