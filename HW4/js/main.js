/* eslint-disable no-undef */
moment.locale('be');

const endDay = () => moment().endOf('day').diff(moment());

console.log(endDay());

const isBirthday = () => {
  const birthday = prompt('Введите дату рождения в формате YYYY-MM-DD', '');
  const reg = /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/;
  if (birthday !== reg) {
    return false;
  }
  return (moment(birthday).endOf('day').fromNow());
};

// console.log(isBirthday());

const isFilter = () => {
  const mat = ['сука', 'пиздец', 'блять', 'лох', 'мудак'];
  let str = prompt('Введите строку', 'Строка');
  const flag = mat[0];

  if (str === null) {
    return false;
  }

  for (let i = 0; i < mat.length; i++) {
    str = str.split(mat[i]).join(flag);
  }

  str = str.split(flag).join('***');
  return str;
};

// console.log(isFilter());

const Users = [
  { id: '22', name: 'Vadim', dob: '1991-11-01' },
  { id: '24', name: 'Amel', dob: '1992-11-02' },
  { id: '1', name: 'Bob', dob: '1995-05-14' },
  { id: '3', name: 'Jon', dob: '2003-09-23' },
];

const Users2 = [
  { id: '22', name: 'Vadim', dob: '1991-11-01' },
  { id: '24', name: 'Amel', dob: '1992-11-02' },
  { id: '1', name: 'Bob', dob: '1995-05-14' },
  { id: '3', name: 'Jon', dob: '2003-09-23' },
];

const Users3 = [
  { id: '22', name: 'Vadim', dob: '1991-11-01' },
  { id: '24', name: 'Amel', dob: '1992-11-02' },
  { id: '1', name: 'Bob', dob: '1995-05-14' },
  { id: '3', name: 'Jon', dob: '2003-09-23' },
];

const usersSort = ((function () {
  function sortId(param1, param2, param3) {
    if (param2 === 'id' && param3 === 'asc') {
      return param1.sort((a, b) => a.id - b.id);
    }
    if (param2 === 'id' && param3 === 'desc') {
      return param1.sort((a, b) => b.id - a.id);
    }
    return false;
  }

  function isAsc(a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  }

  function isDesc(a, b) {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  }

  function sortName(param1, param2, param3) {
    if (param2 === 'name' && param3 === 'asc') {
      return param1.sort((isAsc));
    }
    if (param2 === 'name' && param3 === 'desc') {
      return param1.sort((isDesc));
    }
    return false;
  }

  function sortDob(param1, param2, param3) {
    if (param2 === 'dob' && param3 === 'asc') {
      return param1.sort((a, b) => a.dob - b.dob);
    }
    if (param2 === 'dob' && param3 === 'desc') {
      return param1.sort((a, b) => b.dob - a.dob);
    }
    return false;
  }

  return {
    getId(item1, item2, item3) {
      return sortId(item1, item2, item3);
    },
    getName(item1, item2, item3) {
      return sortName(item1, item2, item3);
    },
    getDob(item1, item2, item3) {
      return sortDob(item1, item2, item3);
    },
  };
})());

console.log(usersSort.getId(Users, 'id', 'desc'));
console.log(usersSort.getName(Users2, 'name', 'asc'));
console.log(usersSort.getDob(Users3, 'dob', 'asc'));
