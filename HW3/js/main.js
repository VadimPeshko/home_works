const title = document.querySelector('.todo-form__title');
const body = document.querySelector('.todo-form__body');
const btn = document.querySelector('.todo-form__btn');
const notesList = [];

const createdObj = (description, text) => ({
  title: description.value,
  body: text.value,
});

const createdNotes = () => notesList.push(createdObj(title, body));

const renderError = () => {
  const error = `
    <div class="alert alert-danger" role="alert">Введите описание и текст</div>`;
  body.insertAdjacentHTML('afterend', error);
};

const renderWarning = () => {
  const error = `
    <div class="alert alert-warning" role="alert">Заметки с одинаковым описанием будут перезаписанны</div>`;
  body.insertAdjacentHTML('afterend', error);
};

const checkTitle = () => {
  notesList.forEach((element, i) => {
    if (element.title === title.value) {
      notesList.splice(i, 1);
      renderWarning();
    }
  });
};

const showNotes = () => {
  const ul = document.querySelector('.todo-notes ul');
  let notes = '';

  if (notesList.length === 0) {
    ul.innerHTML = '';
  }

  notesList.forEach((element) => {
    notes += `<li class="todo-notes__list">
    <h4>${element.title}</h4>
    <P>${element.body}</P>
    </li>`;
    ul.innerHTML = notes;
  });
};

const removeNotes = () => {
  const todoNotes = document.querySelector('.todo-notes__ul');

  todoNotes.addEventListener('contextmenu', (even) => {
    even.preventDefault();
    notesList.forEach((element, i) => {
      if (element.title === even.target.innerHTML) {
        notesList.splice(i, 1);
      }
      showNotes();
    });
  });
};

const removeError = () => {
  const alert = document.querySelectorAll('.alert');
  alert.forEach((element) => {
    element.remove();
  });
};

const clearInput = () => {
  title.value = '';
  body.value = '';
};


btn.addEventListener('click', (even) => {
  even.preventDefault();
  removeError();
  if (title.value.trim() === '' || body.value.trim() === '') {
    renderError();
  } else {
    checkTitle();
    createdNotes();
    clearInput();
    showNotes();
    removeNotes();
  }
});
