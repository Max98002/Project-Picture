export default class Modals {

  constructor(triggerSelector, triggerModal, triggerClose, destroy = false) {
    this.triggers = document.querySelectorAll(triggerSelector);
    this.modal = document.querySelector(triggerModal);
    this.close = document.querySelector(triggerClose);
    this.destroy = destroy; // логіка видалення кнопки після виклику модалки
    this.btnPressed = false;
  }

  showModalByTime(modalSelector, time) {
    setTimeout(() => {
      let display;

      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }
      });

      if (!display) {
        document.querySelector(modalSelector).style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    }, time);
  }

  openByScroll(giftSelector) {
    window.addEventListener('scroll', () => {
      if (!this.btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
        document.querySelector(giftSelector).click();
      }
    });
  }

  init() {
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {

        let target = e.target;

        this.btnPressed = true;

        if (target) {
          e.preventDefault();
        }

        if (this.destroy) {
          trigger.remove();
        }

        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

      });
    });

    this.close.addEventListener('click', () => {
      this.modal.style.display = 'none';
      document.body.style.overflow = '';
    });

    this.modal.addEventListener('click', (e) => { // логіка кліка на подложку модалки
      let target = e.target;

      if (target && target === this.modal) { // якщо всі параментри true тоді вікна закриється . не закриється якщо буде false
        this.modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }
};