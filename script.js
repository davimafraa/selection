const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const scrollContainer = document.getElementById('sc-2half');

/*Add and remove the class .active to .menu and .nav-menu according to the clicks*/
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    NavMenu.classList.toggle('active');
})

/*Carrossel's logic*/
let scrollPosition = 0;

rightArrow.addEventListener('click', () => {
    scrollPosition += 500; // Ajuste a quantidade desejada
    scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
    });
});

leftArrow.addEventListener('click', () => {
    scrollPosition -= 500; // Ajuste a quantidade desejada
    scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
    });
});

function moveBotton() {
    var container = document.getElementById('choice-container');
    var button = document.getElementById('no-btn');

    var x = Math.random() * (container.offsetWidth - button.offsetWidth);
    var y = Math.random() * (container.offsetHeight - button.offsetHeight);
    
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}