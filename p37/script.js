const container = document.getElementById('container');
const colors = ['#e74c3c','#8e44ad','#3498db','#e67e22','#2ecc71'];
const squareAmount = 500;

for(let i = 0; i < squareAmount; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseover', () => {
        const squareColor = colors[Math.floor(Math.random() * colors.length)];
        square.style.backgroundColor = squareColor;
        square.style.boxShadow = `0 0 2px ${squareColor}, 0 0 10px ${squareColor}`;
    });
    
    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = '#1d1d1d';
        square.style.boxShadow = `0 0 2px #000`
    });
}
