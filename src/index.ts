import { generateMenu } from './menu/menu';
import { menuList } from './menu/data';

const navMenu: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
navMenu.innerHTML = generateMenu(menuList);

navMenu.onclick = (e: MouseEvent) => {
  const el = e.target as HTMLAnchorElement;
  const classList = el.classList;
  if (!classList.contains('title')) {
    return;
  }
  const parentLi: HTMLElement = el.parentNode as HTMLLIElement;
  parentLi.classList.toggle('menu-open');
};
