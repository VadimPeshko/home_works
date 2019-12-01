function getNumWord(num, word1, word2, word5) {
    let dd = num % 100;
    let oneDigit = num % 10;
  
    switch(true) {
      case ((dd >= 11) && (dd <= 19)):
        return word5;
      case (oneDigit === 1):
        return word1;
      case (oneDigit >= 2 && oneDigit <= 4):
        return word2;
      default:
        return word5;
    }
  };
  
  function makeTest() {
    let applesCount = parseInt(prompt('Сколько яблок?'));
    if (applesCount) {
      alert('У вас ' + applesCount + ' ' + getNumWord(applesCount,
          'яблоко', 'яблока', 'яблок'));
    }
  };

  function getData() {
    let surname = prompt('Введите вашу фамилию', 'Иванов');
    let name = prompt('Введите ваше имя', 'Иван');
    let patronymic = prompt('Введите ваше отчество', 'Иванович');
    let age = +prompt('Введите ваш возраст', '18');
    let sex = confirm('Ваш пол - мужской?');

    if (surname === '') {
      surname = 'Иванов';
    }
    if (name === '') {
      name = 'Иван';
    }
    if (patronymic === '') {
      patronymic = 'Иванович';
    }
    if (age === 0) {
      age = 18;
    }
    if (sex) {
      sex = 'Мужской';
    }
    else {
      sex = 'Женский';
    }

    alert(`Ваше ФИО: ${surname} ${name} ${patronymic}
    Ваш возраст в годах: ${age}
    Ваш возраст в днях: ${age * 365}
    Через 5 лет вам будет: ${age + 5}
    Ваш пол: ${sex}
    Вы на пенсии: ${age > 65 ? 'Да' : 'Нет'}`);
};
  
function isPolindrom(str) {
  let res = [];
  let res1 = [];
  let res2 = [];

  for(let i = 0; i < str.length; i++){
    res.push(str[i]);
  }
  for(let i = 0; i < Math.floor(res.length/2); i++){
    res1.push(str[i]);
  }
  for(let i = Math.ceil(res.length/2); i < res.length; i++){
    res2.push(str[i]);
  }

  res2.reverse();

  for(let i = 0; i < res1.length; i++){
    if(res1[i] === res2[i]){
      console.log('Полиндром');
    }else {
      console.log('Не полиндром');
    }
  }
};


function getMultiplyTable() {
  const body = document.body;
  const table = document.createElement('table');
  let tr, td, tdInner = '';

  table.style.width = '100%';
  table.setAttribute('border', '1');

  for (let i = 1; i <= 10; i++) {
    if (i === 1 || i === 6) {
      tr = document.createElement('tr');
    }
    td = document.createElement('td');
    for (let j = 1; j <= 10; j++) {
      td.innerHTML += `<div style="padding: 5px">${i} * ${j} = ${i * j}</div>`;
    }
    tr.append(td);
    if (i === 5 || i === 10) {
      table.append(tr);
    }
  }

  body.append(table);
}
makeTest();
getData();
isPolindrom("fooof");
getMultiplyTable();