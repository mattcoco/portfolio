const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    // .split splits the letters into an array
    // label.innerHTML = label.innerText.split('')    

    // label.innerHTML = label.innerText
    //     .split('')
        
    // y map lo convierte en un array de otra cosa
    // en este caso en creating un array
    // with a letter with a span around it 
    //     .map((letter, idx) => `<span>${letter}</span>`)

    // el join lo vuelve a convertir en string
    //     .join('')


    // junto al transition delay multiplicativo en función del idx, se queda así
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
    .join('')

})