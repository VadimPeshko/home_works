class RestApi {
  constructor() {
    this.apiDefault = 'http://localhost:3006/';
  }

  getResource = async (url) => {
    const resp = await fetch(`${this.apiDefault}${url}`);

    if (!resp.ok) {
      throw new Error(`Could not fetch ${url}; recevied ${resp.status}`);
    }

    return await resp.json();
  }

  setResource = async (url, data) => {
    const resp = await fetch(`${this.apiDefault}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(data)
    });

    if (!resp.ok) {
      throw new Error(`Could not fetch ${url}; recevied ${resp.status}`);
    }

    return await resp.json();
  }

  updateResource = async (id, data) => {
    const resp = await fetch(`${this.apiDefault}posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(data)
    });

    if (!resp.ok) {
      throw new Error(`Could not fetch ${url}; recevied ${resp.status}`);
    }

    return await resp.json();
  }

  deleteResource = async (id) => {
    const resp = await fetch(`${this.apiDefault}posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/json'
      }
    });

    if (!resp.ok) {
      throw new Error(`Could not fetch ${url}; recevied ${resp.status}`);
    }

    return await resp.json();
  }

  getPost = async () => {
    const res = await this.getResource('posts');
    this.renderPosts(res);
    this.changePost();
    this.deletePost();
  }

  addPost = async () => {
    const data = this.getFormData();
    if (data.text === '' || data.author === '' || data.textarea === '') {
      this.renderMsg(2000, 'Заполните все поля!');
    } else {
      await this.setResource('posts', data);
      this.renderMsg(2000, 'Пост добавлен!')
    }
  }

  editPost = async (elemId) => {
    const data = this.getFormData();
    await this.updateResource(elemId, data);
  }

  removePost = async (elemId) => {
    await this.deleteResource(elemId);
  }

  getFormData = () => {
    // const form = document.querySelector('form');
    // let obj = {};
    // let formData = new FormData(form);

    // formData.forEach((value, key) => {
    //   obj[key] = value;
    // });

    // return obj;
    const text = document.querySelector('#text').value;
    const author = document.querySelector('#author').value;
    const textarea = document.querySelector('#textarea').value

    return { text, author, textarea };

  }

  changePost = () => {
    const change = document.querySelectorAll('#change');
    change.forEach((element) => {
      element.addEventListener('click', () => {
        this.editPost(element.dataset.id);
        this.renderMsg(2000, 'Пост изменен!');
      })
    })
  }

  deletePost = () => {
    const remove = document.querySelectorAll('#delete');
    remove.forEach((element) => {
      element.addEventListener('click', () => {
        this.removePost(element.dataset.id);
        this.renderMsg(2000, 'Пост удален!');
      })
    })
  }

  renderMsg(timer = 3000, msg) {
    const showError = document.querySelector('.show-error');
    const div = document.createElement('div');
    const error = `<div class="alert alert-warning" role="alert">
                      ${msg}
                    </div>`;
    div.innerHTML = error;
    document.querySelector('.show-error').append(div);

    setTimeout(() => {
      showError.innerHTML = '';
    }, timer)
  }

  renderPosts = (posts) => {
    const loadPost = document.querySelector('.load-posts');
    loadPost.innerHTML = '';
    posts.forEach((element) => {
      const div = document.createElement('div');
      const template = `<div class="card" style="width: 18rem;">
                          <div class="card-body">
                            <h5 class="card-title">${element.text}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${element.author}</h6>
                            <p class="card-text">${element.textarea}</p>
                            <a href="#" id="change" data-id="${element.id}" class="btn btn-primary">Change post</a>
                            <a href="#" id="delete" data-id="${element.id}" class="btn btn-primary">Delete post</a>
                          </div>
                        </div>`
      div.innerHTML = template;
      document.querySelector('.load-posts').append(div);
    });
  }
}

const loadPosts = document.querySelector('.btn-primary');
const addPosts = document.querySelector('.btn-secondary');
const res = new RestApi();

loadPosts.addEventListener('click', () => {
  res.getPost();
});

addPosts.addEventListener('click', () => {
  resp.addPost();
});