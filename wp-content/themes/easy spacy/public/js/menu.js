const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        nav.classList.add('menu__responsive');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        nav.classList.remove('menu__responsive');
    }
});