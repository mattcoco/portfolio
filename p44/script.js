const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied'

// Si hacemos esto, devuelve el objeto al que hemos hecho click
// panel.addEventListener('click', (e) => {
//     console.log(e.target)
// })

ratingsContainer.addEventListener('click', (e) => {
    // ponemos el parentNode para referirnos al container, si hacemos click en la img no se hace click ahi
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        // nextElementSibling coge el siguiente elemento al mismo nivel
        selectedRating = e.target.nextElementSibling.innerHTML;
        
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"> </i>
        <strong> Thank you! </strong>
        <br>
        <strong> Feedback: ${selectedRating} </strong>
        <p> We'll use your feedback to improve our customer support!</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}