/* в этот файл добавляет скрипты*/
// disable no-js
const header = document.querySelector('.header');
header.classList.remove('header--no-js');

const navigation = document.querySelector('.navigation__list');
navigation.classList.remove('navigation__list--no-js');

const map = document.querySelector('.map__interactive-map');
map.classList.remove('map__interactive-map--no-js');

// toggle-menu
const menu = document.querySelector('.navigation__menu-button');
menu.addEventListener('click', () => {
  menu.classList.toggle('navigation__menu-button--open');
  navigation.classList.toggle('navigation__list--open');
});
