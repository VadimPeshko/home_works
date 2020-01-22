function Timer(renderEl, limit = 30, msg, runTimerTwo) {
  let value = limit;
  const text = msg;
  let intervalId = null;
  const el = renderEl;

  this.startPromise = () => new Promise((resolve, reject) => {
    intervalId = setInterval(() => {
      value -= 1;
      el.innerHTML = `${text} ${value}`;
      if (value === 0) {
        clearInterval(intervalId);
        resolve(runTimerTwo);
      }
      if (value <= 0) {
        clearInterval(intervalId);
        reject('Error');
      }
    }, 1000);
  });
}

const alert = document.querySelector('.alert');
const startBtn = document.querySelector('.btn-start');
const endBtn = document.querySelector('.btn-end');
const userInput = document.querySelector('.form-control');

const calcBpm = (val) => {
  alert.textContent = `Ваш пульс ${parseInt(val) * 4} ударов в минуту`;
  userInput.value = '';
};

const nextTimer = () => {
  const timerTwo = new Timer(alert, 15, 'Измерение');
  timerTwo.startPromise();
};

startBtn.addEventListener('click', () => {
  const timer = new Timer(alert, 5, 'Измерение начнется через', nextTimer);
  timer.startPromise()
    .then((data) => data());
});

endBtn.addEventListener('click', () => {
  calcBpm(userInput.value);
});
