import {
  postData
} from './services/requests';

const forms = (state) => {

  const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    upload = document.querySelectorAll('[name="upload"]');

  console.log(state);

  const message = {
    loading: 'Загрузка ...',
    success: 'Спасибо!',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };

  const path = {
    design: 'assets/server.php',
    question: 'assets/question.pnp'
  };

  const clearInput = () => {
    inputs.forEach(input => input.value = '');
    upload.forEach(item => item.previousElementSibling.textContent = 'Файл не вибран');
  }

  upload.forEach(item => {
    item.addEventListener('input', () => {
      let dots;
      let arr = item.files[0].name.split('.');

      arr[0].length > 6 ? dots = '...' : dots = '.';

      const name = arr[0].substring(0, 6) + dots + arr[1];

      item.previousElementSibling.textContent = name;

    });
  });

  form.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.parentNode.appendChild(statusMessage);

      form.classList.add('animated', 'fadeOut');
      setTimeout(() => {
        form.style.display = 'none';
      }, 400);

      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeIn');
      setTimeout(() => {
        statusMessage.appendChild(statusImg);
      }, 400);

      let textMessage = document.createElement('p');
      textMessage.textContent = message.loading;
      setTimeout(() => {
        statusMessage.appendChild(textMessage);
      }, 400);

      const formData = new FormData(form);

      if (form.classList.contains("calc_form")) {

        state['suma'] = form.querySelector('.calc-price').textContent;

        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      let api;

      form.closest('.popup-design') || form.classList.contains('calc_form') ? api = path.design : api = path.question;

      postData(api, formData)
        .then(res => {
          console.log(res);
          statusImg.setAttribute('src', message.ok);
          textMessage.textContent = message.success;
        })
        .catch(err => {
          console.log(err);
          statusImg.setAttribute('src', message.fail);
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          setTimeout(() => {
            clearInput();
            form.style.display = 'block';
            statusMessage.remove();
            form.classList.remove('fadeOut');
            form.classList.add('fadeIn');
          }, 4000);
        });

    });
  });

};

export default forms;