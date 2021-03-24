const accordion = (triggerSelector, itemsSelector) => {
  const btns = document.querySelectorAll(triggerSelector),
    blocks = document.querySelectorAll(itemsSelector);

  // blocks.forEach(block => block.classList.add('animated', 'fadeInDown'));

  // btns.forEach(btn => {
  //   btn.addEventListener('click', function () {
  //     if (!this.classList.contains('active')) {
  //       btns.forEach(item => item.classList.remove('active', 'active-style'));
  //       this.classList.add('active', 'active-style');
  //     }
  //   });
  // });

  // blocks.forEach(block => {
  //   block.classList.add('animated', 'fadeInDown');
  // });

  // btns.forEach(btn => {
  //   btn.addEventListener('click', function () {
  //     if (!this.classList.contains('active', 'active-style')) {
  //       btns.forEach(item => {
  //         item.classList.remove('active', 'active-style');
  //         item.nextElementSibling.style.dispaly = 'none';
  //       });
  //       this.classList.add('active', 'active-style');
  //       this.nextElementSibling.style.dispaly = 'block';
  //     }
  //   });
  // });

  btns.forEach(btn => {
    btn.addEventListener('click', function () {

      this.classList.toggle('active-style');
      this.nextElementSibling.classList.toggle('active-content');

      if (this.classList.contains('active-style')) {
        btns.forEach(item => {
          item.classList.remove('active-style');
          item.nextElementSibling.classList.remove('active-content');
          item.nextElementSibling.style.maxHeight = '0';
        });
        this.classList.add('active-style');
        this.nextElementSibling.classList.add('active-content');
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0';
      }

    });
  });


};

export default accordion;