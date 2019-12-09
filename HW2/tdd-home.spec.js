describe('tdd-home.js -> positiveSum -> should find sum of positive number in array', () => {

  it('Base test', function () {
    expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);
    expect(positiveSum([1, -2, 3, 4, 5])).toBe(13);
    expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);
  });

  it('In case when array is empty should return 0', function () {
    expect(positiveSum([])).toBe(0);
  });

});

describe('tdd-home.js -> evenOrOdd -> should return strings \'Even\' or  \'Odd\'', () => {
  it('Base test', function () {
    expect(evenOrOdd(3456)).toBe('Even');
    expect(evenOrOdd(653)).toBe('Odd');
  });
});


describe('tdd-home.js -> centuryFromYear -> Input: year, output: century', () => {
  it('Base test', function () {
    expect(centuryFromYear(1765)).toBe(18);
    expect(centuryFromYear(45)).toBe(1);
    expect(centuryFromYear(2019)).toBe(21);
  });
});

describe('tdd-home.js -> It should remove all values from list a, which are present in list b', () => {
  it('Removing from empty array should return []', function () {
    expect(arrayDiff([], [4, 5])).toEqual([]);
  });

  it('Basic test', function () {
    expect(arrayDiff([3, 4], [3])).toEqual([4]);
  });

  it('Removing empty array should return array without diff', function () {
    expect(arrayDiff([1, 8, 2], [])).toEqual([1, 8, 2]);
  });
});

describe('tdd-home.js -> isPolindrom -> should return \'True\' or  \'False\'', () => {
  it('Base test', function () {
    expect(isPolindrom('foof')).toBe(true);
    expect(isPolindrom('foorf')).toBe(false);
  });
});

describe('tdd-home.js -> getNumWord -> should return words', () => {
  it('Base test', function () {
    expect(getNumWord(1, 'яблоко', 'яблока', 'яблок')).toBe('яблоко');
    expect(getNumWord(2, 'яблоко', 'яблока', 'яблок')).toBe('яблока');
    expect(getNumWord(100, 'яблоко', 'яблока', 'яблок')).toBe('яблок');
  });
});

describe('tdd-home.js -> makeTest -> Prompt test', () => {
  it('Should return apples count or false', function () {
    spyOn(window, 'prompt').and.callFake(function () {
      let result;
      let num = 1;
      if (num) {
        result = 'вв';
      }
      return result;
    });
    expect(makeTest()).toBe(false);
  });
});

describe('tdd-home.js -> getData -> Prompts test', () => {
  let step = 1;
  afterEach(function () {
    step = 1;
  });
  it('Should return strings and number', function () {
    spyOn(window, 'prompt').and.callFake(function () {
      let result;
      switch (step) {
        case 1:
          step += 1;
          result = null;
          break;
        case 2:
          step += 1;
          result = '';
          break;
        case 3:
          step += 1;
          result = '';
          break;
        case 4:
          step += 1;
          result = 55;
          break;
      }
      return result;
    });
    spyOn(window, 'confirm').and.returnValue(true);
    expect(getData()).toBe(`Ваше ФИО: Иванов Иван Иванович
    Ваш возраст в годах: 55
    Ваш возраст в днях: 20075
    Через 5 лет вам будет: 60
    Ваш пол: Мужской
    Вы на пенсии: Нет`);
  });
});