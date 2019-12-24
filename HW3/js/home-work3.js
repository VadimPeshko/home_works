// eslint-disable-next-line no-undef
describe('home-works3.js -> Notes', () => {
  describe('Test for initNotes', () => {
    it('Should return array', () => {
      localStorage.setItem('notes', '[{"title": "123", "body": "321"}]');
      const res = Notes.getNotes();
      expect(res).toEqual([{ title: '123', body: '321' }]);
    });
  });

  describe('Test for addNotes', () => {
    it('Should return false', () => {
      const res = Notes.addItem('123', '321');
      expect(res.done).toBe(false);
    });
  });

  describe('Test for removeNotes', () => {
    it('Should return false', () => {
      const res = Notes.removeItem('1234');
      expect(res.done).toBe(false);
    });
  });
});
