// Cuidado con el @keyframes, pone -468px pero tendria que hacerlo responsive

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgHeader = document.querySelector('.animated-bg-header')
const animatedBgProfile = document.querySelector('.animated-bg-profile')
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

setTimeout(function() {
    animatedBgs.forEach(bg => {
        bg.classList.remove('animated-bg');
    });
    
    animatedBgHeader.style.cssText += '; display: none;';
    animatedBgProfile.style.cssText += '; display: none;';
}, 2000);