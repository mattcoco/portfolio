const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    // true if checked
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theClickedOne) {
            // we uncheck one of the two
            fast.checked = false;
        }

        if(cheap === theClickedOne) {
            // we uncheck one of the two
            good.checked = false;
        }

        if(fast === theClickedOne) {
            // we uncheck one of the two
            cheap.checked = false;
        }
    }
}