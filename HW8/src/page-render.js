/* eslint-disable import/prefer-default-export */
import { CONFIG } from './config';

export class PageRender {
  // eslint-disable-next-line no-useless-constructor
  constructor(router) {
    this.router = router;
  }

  initNewsLocation() {
    const news = document.querySelectorAll('.single-card');
    news.forEach((item) => {
      item.addEventListener('click', (event) => {
        const clicked = event.target;
        if (clicked.classList.contains('btn-primary')) {
          const { index } = item.dataset;
          window.history.pushState(null, null, `/news/${index}`);
          this.router.render(decodeURI(location.pathname));
        }
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  renderHomePage(news) {
    const page = document.querySelector('.all-news');
    const allNews = document.querySelectorAll('.single-card');
    [...allNews].forEach((item) => {
      item.style.display = 'none';
    });

    [...allNews].forEach((item) => {
      news.forEach((element) => {
        if (Number(item.dataset.index) === Number(element.id)) {
          item.style.display = 'block';
        }
      });
    });
    page.style.display = 'block';
  }

  // eslint-disable-next-line class-methods-use-this
  getAllNews(data) {
    const allNews = document.querySelector(CONFIG.selectors.news);
    data.forEach((element) => {
      const div = document.createElement('div');
      const template = `<div class="card mb-3 single-card" style="width: 18rem;" data-index="${element.id}">
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.desc}</p>
        <a class="btn btn-primary">Читать</a>
      </div>
    </div>`;
      div.innerHTML = template;
      allNews.append(div);
    });
    this.initNewsLocation();
  }

  initSingleNewsPage() {
    this.singleNewsPage = document.querySelector('.modal-window');
    this.block = this.singleNewsPage.style.display = 'block';
    this.singleNewsPage.addEventListener('click', (event) => {
      if (this.block) {
        const clicked = event.target;
        if (clicked.classList.contains('btn-primary')) {
          history.pushState(null, null, '/');
          this.router.render(decodeURI(location.pathname));
        }
      }
    });
  }

  renderSingleNewsPage(news) {
    const page = document.querySelector('.modal-window');
    const cardBody = document.querySelector('.one-card');
    const index = location.pathname.split('/news/')[1].trim();
    let isFind = false;
    if (news.length) {
      news.forEach((element) => {
        if (Number(element.id) === Number(index)) {
          isFind = true;
          cardBody.querySelector('.card-title').innerText = element.title;
          cardBody.querySelector('.card-text').innerText = element.description;
        }
      });
    }
    // isFind ? (page.style.display = 'block') : (this.render404());
    if (isFind) {
      page.style.display = 'block';
    } else {
      this.render404();
    }
  }

  initSerchPage() {
    const searchBtn = document.querySelector('.btn-outline-success');
    searchBtn.addEventListener('click', (event) => {
      event.preventDefault();
      history.pushState(null, null, '/search/');
      this.router.render(decodeURI(location.pathname));
    });
  }

  renderSearchPage(news) {
    const input = document.querySelector('.form-control');
    const searhBlock = document.querySelector('.search');
    const searchCard = document.querySelector('.saerch-card');
    searchCard.innerHTML = '';
    let isFind = false;
    const newsSearch = news.filter(((item) => item.title.toLowerCase().includes(input.value)));
    if (newsSearch.length) {
      isFind = true;
      newsSearch.forEach((element) => {
        const div = document.createElement('div');
        const template = `<div class="card mb-3 single-card" style="width: 18rem;" data-index="${element.id}">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.desc}</p>
          <a class="btn btn-primary">Читать</a>
        </div>
      </div>`;
        div.innerHTML = template;
        searchCard.append(div);
      });
    }
    input.value = '';
    if (isFind) {
      searhBlock.style.display = 'block';
      this.initNewsLocation();
    } else {
      this.render404();
    }
  }

  initAboutPage() {
    const aboutLink = document.querySelector('.navbar-brand');
    aboutLink.addEventListener('click', () => {
      window.history.pushState(null, null, '/about/');
      this.router.render(decodeURI(location.pathname));
    });
  }

  renderAboutPage() {
    const aboutPage = document.querySelector('.about');
    aboutPage.style.display = 'block';
  }

  render404() {
    window.history.pushState(null, null, '/404');
    this.router.render(decodeURI(location.pathname));
  }

  renderErrorPage() {
    const page = document.querySelector('.error');
    page.style.display = 'block';
  }
}
