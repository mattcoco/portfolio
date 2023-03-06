const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    
    fetch('https://icanhazdadjoke.com/', config)
    .then((res) => res.json())
    .then((data) => {
        // data.joke es el texto del objeto data
        jokeEl.innerHTML = data.joke;
    })
}

