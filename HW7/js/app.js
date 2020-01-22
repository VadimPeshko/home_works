import { DARKSKY } from './main';

const btn = document.querySelector('.btn');
const input = document.querySelector('.form-control');
const msg = document.querySelector('.message');
const sky = new DARKSKY();

const handler = () => {
  if (input.value === '') {
    msg.innerHTML = `<div class="alert alert-warning" role="alert">
                      Введите долготу и ширину!
                    </div>`;
  } else {
    sky.getResource(input.value);
    msg.innerHTML = '';
    input.value = '';
  }
};

btn.addEventListener('click', handler);
