const Notes = ((function () {
  const NOTES = 'notes';

  const initNotes = () => {
    if (localStorage.getItem(NOTES)) {
      return JSON.parse(localStorage.getItem(NOTES));
    }

    return [];
  };

  const notes = initNotes();
  const saveNotes = (desc, text) => {
    const not = {
      title: desc,
      body: text,
    };
    notes.push(not);
    localStorage.setItem(NOTES, JSON.stringify(notes));
  };

  const addNotes = (title, body) => {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].title === title) {
        return {
          done: false,
          error: 'Такая заметка уже существует',
        };
      }
    }
    saveNotes(...[title, body]);
    return {
      done: true,
    };
  };

  const removeNotes = (title) => {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].title === title) {
        notes.splice(i, 1);
        localStorage.setItem(NOTES, JSON.stringify(notes));
        return { done: true };
      }
    }
    return {
      done: false,
      error: 'Элемент не существует',
    };
  };

  return {
    getNotes() {
      return notes;
    },
    addItem(item1, item2) {
      return addNotes(item1, item2);
    },
    removeItem(item) {
      return removeNotes(item);
    },
  };
})());

const FRONT = {
  titleValue: document.querySelector('.todo-form__title'),
  bodyValue: document.querySelector('.todo-form__body'),
  btn: document.querySelector('.todo-form__btn'),
  btnRemove: document.querySelector('.todo-form__btn-remove'),
  ul: document.querySelector('.todo-notes__ul'),
  warning: document.querySelector('#warning'),

  render() {
    this.clearInput();
    this.clearNotes();
    this.warning.classList.remove('show');
    Notes.getNotes().forEach((element) => {
      const li = document.createElement('li');
      li.className = 'todo-notes__list';
      li.innerHTML = `<h4>${element.title}</h4><p>${element.body}</p>`;
      this.ul.appendChild(li);
    });
  },
  clearNotes() {
    this.ul.innerText = '';
  },
  clearInput() {
    this.titleValue.value = '';
    this.bodyValue.value = '';
  },
  checkResult(result) {
    if (result.done) {
      FRONT.render();
      this.warning.classList.remove('show');
    } else {
      this.warning.classList.add('show');
      FRONT.warning.innerText = result.error;
    }
  },
};

FRONT.btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (FRONT.titleValue.value === '') {
    FRONT.warning.innerText = 'Введите что-нибудь!';
    this.warning.classList.add('show');
  } else {
    const result = Notes.addItem(FRONT.titleValue.value, FRONT.bodyValue.value);
    FRONT.checkResult(result);
  }
});

FRONT.btnRemove.addEventListener('click', (event) => {
  event.preventDefault();
  const result = Notes.removeItem(FRONT.titleValue.value);
  FRONT.checkResult(result);
});

FRONT.render();
