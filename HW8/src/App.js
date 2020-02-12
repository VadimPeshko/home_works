import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import './styles/styles.scss';
import { CONFIG } from './config';
import { PageRender } from './page-render';
import { RouterHistory } from './router';

class App {
  constructor() {
    this.news = [];
    this.router = new RouterHistory();
    this.pageRender = new PageRender(this.router);
    this.getData();
  }

  // eslint-disable-next-line class-methods-use-this
  getData() {
    fetch(`${CONFIG.api}/news`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error(`Данные не были полученны ${resp.status}`);
      })
      .then((data) => {
        this.news = data;
        this.pageRender.getAllNews(data);
        this.pageRender.initSingleNewsPage();
        this.pageRender.initAboutPage();
        this.pageRender.initSerchPage();
        this.initRouter();
        this.router.render(decodeURI(location.pathname));
      });
  }

  initRouter() {
    this.router.addRouter('', this.pageRender.renderHomePage.bind(this.pageRender, this.news));
    this.router.addRouter('news',
      this.pageRender.renderSingleNewsPage.bind(this.pageRender, this.news));
    this.router.addRouter('404', this.pageRender.renderErrorPage);
    this.router.addRouter('about', this.pageRender.renderAboutPage);
    this.router.addRouter('search', this.pageRender.renderSearchPage.bind(this.pageRender, this.news));
  }
}

const app = new App();
