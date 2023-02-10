const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <= 9) {
            // Con esto impedimos escribir 2 numeros en la misma celda
            codes[idx].value = ''
            // Si no ponemos el setTimeout, se hace el focus en el idx +1 primero y se escribe el numero en el idx + 1, en lugar de en el idx
            setTimeout(() => codes[idx + 1].focus(), 1)
        } else if(e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 1) 
        }
    })
})