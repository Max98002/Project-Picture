import Modals from './modules/modals';
import slider from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import changeState from './modules/changeState';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  new Modals('.button-design', '.popup-design', '.popup-design .popup-close').init();
  new Modals('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close').init();
  new Modals('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true).init();
  // new Modals().showModalByTime('.popup-consultation', 60000);
  new Modals().openByScroll('.fixed-gift');

  slider('.main-slider-item', 'vertical');

  slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');

  let formSatet = {};

  changeState(formSatet);

  forms(formSatet);

  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');

  showMoreStyles('.button-styles', '.styles .row');

  calc('#size', '#material', '#options', '.promocode', '.calc-price');

  filter();

  pictureSize('.sizes-block');

  accordion('.accordion-heading', '.accordion-block');

  burger('.burger', '.burger-menu');

  scrolling('.pageup');

  drop();

});