const menuSmallScreens = document.querySelector('div#menu-small-screens');
const toggler = document.querySelector('span#toggler')
toggler.addEventListener('click', () => { 
    if (menuSmallScreens.classList.contains('active')) {
        menuSmallScreens.classList.remove('active');
        menuSmallScreens.classList.add('hidden-element');
    } else {
        menuSmallScreens.classList.add('active');
        menuSmallScreens.classList.remove('hidden-element');
    }
});