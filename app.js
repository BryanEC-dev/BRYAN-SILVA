const menu = document.querySelector('.header__navbar--options');
const links = document.querySelector('.header__navar--links');
const togleMenu = () => {
    (links.style.display == 'none') ? links.style.display = 'flex' : links.style.display = 'none';
}

menu.addEventListener("click",togleMenu);



