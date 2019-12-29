describe('home-work4 -> main.js', () => {
  describe('main.js -> endDay', () => {
    it('Should return the data type number', () => {
      const second = endDay();
      expect(typeof (second)).toBe('number');
    });
  });

  describe('main.js -> isBerthday', () => {
    it('Should return false if input not equal regExp', () => {
      spyOn(window, 'prompt').and.callFake(function () {
        let res;
        let step = 1;
        if (step) {
          res = '2222/22/22';
        }
        return res;
      });
      expect(isBirthday()).toBe(false);
    });
  });

  describe('main.js -> isFilter', () => {
    it('Should return str', () => {
      spyOn(window, 'prompt').and.callFake(function () {
        let res;
        let step = 1;
        if (step) {
          res = 'сука, лохпривет. это блять фильтр мата!'
        }
        return res;
      });
      expect(isFilter(['сука', 'пиздец', 'блять', 'лох', 'мудак'])).toBe('***, ***привет. это *** фильтр мата!');
    });
  });

  describe('main.js -> UsersSort', () => {
    it('Should return the sorted object by id', () => {
      const testUsers = [
        { id: '100', name: 'Dima', dob: '2006-05-25' },
        { id: '1', name: 'Sam', dob: '1998-07-04' },
        { id: '55', name: 'Alex', dob: '2001-11-21' },
        { id: '10', name: 'Peter', dob: '2004-01-15' },
      ];
      expect(usersSort.getId(testUsers, 'id', 'asc')).toEqual([
        { id: '1', name: 'Sam', dob: '1998-07-04' },
        { id: '10', name: 'Peter', dob: '2004-01-15' },
        { id: '55', name: 'Alex', dob: '2001-11-21' },
        { id: '100', name: 'Dima', dob: '2006-05-25' },
      ]);
    });
    it('Should return the sorted object by name', () => {
      const testUsers2 = [
        { id: '100', name: 'Dima', dob: '2006-05-25' },
        { id: '1', name: 'Sam', dob: '1998-07-04' },
        { id: '55', name: 'Alex', dob: '2001-11-21' },
      ];
      expect(usersSort.getName(testUsers2, 'name', 'asc')).toEqual([
        { id: '55', name: 'Alex', dob: '2001-11-21' },
        { id: '100', name: 'Dima', dob: '2006-05-25' },
        { id: '1', name: 'Sam', dob: '1998-07-04' },
      ]);
    });
    it('Should return the sorted object by dob', () => {
      const testUsers3 = [
        { id: '100', name: 'Dima', dob: '2006-05-25' },
        { id: '1', name: 'Sam', dob: '1998-07-04' },
      ];
      expect(usersSort.getDob(testUsers3, 'dob', 'desc')).toEqual([
        { id: '100', name: 'Dima', dob: '2006-05-25' },
        { id: '1', name: 'Sam', dob: '1998-07-04' },
      ]);
    });
  });
});