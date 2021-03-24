const changeState = (state) => {
  const sizeBlock = document.querySelector('#size'),
    materialBlock = document.querySelector('#material'),
    optionBlock = document.querySelector('#options'),
    promocodeBlock = document.querySelector('.promocode'),
    resultBlock = document.querySelector('.calc-price');

  function bindActionToElements(event, element, prop) {
    element.addEventListener(event, () => {
      switch (element.id) {
        case 'size':
          state[prop] = sizeBlock.value;
          break;
        case 'material':
          state[prop] = materialBlock.value;
          break;
        case 'options':
          state[prop] = optionBlock.value;
          break;
        case 'promocode':
          state[prop] = promocodeBlock.value;
          break;
          default:
          state["suma"] = resultBlock.textContent;
          break;
      }
    });
  }

  bindActionToElements('change', sizeBlock, 'size');
  bindActionToElements('change', materialBlock, 'material');
  bindActionToElements('change', optionBlock, 'options');
  bindActionToElements('input', promocodeBlock, 'promocode');
};

export default changeState;