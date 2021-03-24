const burger = (btnSelector, menuSelector) => {
  const menu = document.querySelector(menuSelector),
    btn = document.querySelector(btnSelector);

  menu.style.display = 'none';
  btn.style.zIndex = '123';

  btn.addEventListener('click', () => {
    if (menu.style.display === 'none' && window.screen.availWidth < 993) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });


  window.addEventListener('resize', () => window.screen.availWidth > 993 ? menu.style.display = 'none' : '');

};

export default burger;