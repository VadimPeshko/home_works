function Timer(renderEl, limit = 30, msg, timer) {
  let value = limit;
  const text = msg;
  let isPause = false;
  let intervalId = null;
  const el = renderEl;

  this.start = function () {
    intervalId = setInterval(() => {
      if (value <= 0) {
        clearInterval(intervalId);
      }
      el.innerHTML = `${text} ${value}`;
      value -= 1;
    }, 1000);
  };

  this.time = function () {
    setTimeout(() => {
      this.start();
    }, timer);
  };

  this.pause = function () {
    if (!isPause) {
      clearInterval(intervalId);
      isPause = true;
      return true;
    }
    this.start();
    isPause = false;
    return true;
  };
}

const alert = document.querySelector('.alert');
const startBtn = document.querySelector('.btn-start');
const endBtn = document.querySelector('.btn-end');
const userInput = document.querySelector('.form-control');

const calcBpm = (val) => {
  alert.textContent = `Ваш пульс ${parseInt(val) * 4} ударов в минуту`;
  userInput.value = '';
};

startBtn.addEventListener('click', () => {
  const timer = new Timer(alert, 5, 'Измерение начнется через');
  const timerTwo = new Timer(alert, 15, 'Измерение', '5000');
  timer.start();
  timerTwo.time();
});

endBtn.addEventListener('click', () => {
  calcBpm(userInput.value);
});


function isRandom() {
  const random = Math.round(Math.random() * 100);
  try {
    if (random % 2 === 0) {
      throw new Error(`even number ${random}`);
    }
    console.log(`odd number ${random}`);
  } catch (e) {
    console.log(e);
  }
}

const interavId = setInterval(() => {
  isRandom();
}, 1000);

setTimeout(() => {
  clearInterval(interavId);
}, 20000);
