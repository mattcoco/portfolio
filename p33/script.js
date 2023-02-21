// sacamos todos los inputs, que es donde haremos click
const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    // true if checked
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theClickedOne) {
            // we uncheck one of the two, el que sea
            fast.checked = false;
        }

        if(cheap === theClickedOne) {
            good.checked = false;
        }

        if(fast === theClickedOne) {
            cheap.checked = false;
        }
    }
}