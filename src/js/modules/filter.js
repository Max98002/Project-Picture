const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all'),
    no = document.querySelector('.portfolio-no');


  const typeFilter = (markType) => {
    markAll.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });

    no.style.display = 'none'
    no.classList.remove('animated', 'fadeIn');

    if (markType) {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block'
      no.classList.add('animated', 'fadeIn');
    }
  };


  function bindActionElement(menuWrapper, markWrapper, btnType, markType) {

    const menuWrap = document.querySelector(menuWrapper),
      markWrap = document.querySelector(markWrapper),
      btnTriger = menuWrap.querySelectorAll(btnType),
      markTriger = markWrap.querySelectorAll(markType);

    btnTriger.forEach(btn => {
      btn.addEventListener('click', () => {
        typeFilter(markTriger);
      });
    })

  }

  bindActionElement('.portfolio-menu', '.portfolio-wrapper', '.all', '.all');
  bindActionElement('.portfolio-menu', '.portfolio-wrapper', '.lovers', '.lovers');
  bindActionElement('.portfolio-menu', '.portfolio-wrapper', '.chef', '.chef');
  bindActionElement('.portfolio-menu', '.portfolio-wrapper', '.girl', '.girl');
  bindActionElement('.portfolio-menu', '.portfolio-wrapper', '.guy', '.guy');


  menu.addEventListener('click', (e) => {
    let target = e.target;
    if (target && target.tagName === 'LI') {
      items.forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');
    }
  });

};

export default filter;