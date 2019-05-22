class Menu {
  constructor(menu){
    this.menuButton = menu
    menuButton.addEventListener('click', () => this.toggleMenu())
    this.menuContent = document.querySelector('.menu')
  }

  toggleMenu = () => { 
    this.menuContent.classList.toggle('menu--open');
  }
}
const menuButton = document.querySelector('.menu-button');
new Menu(menuButton)