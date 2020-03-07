import { CONFIG } from './config';

// eslint-disable-next-line import/prefer-default-export
export class RouterHistory {
  constructor() {
    this.routes = {
      404: () => {
        console.log('Not Found');
      },
    };
    this.mainContentPages = document.querySelectorAll('.main .page');
    console.log(this.mainContentPages);
    window.addEventListener('popstate', () => {
      this.render(decodeURI(window.location.pathname));
    });
  }

  addRouter(route, action) {
    this.routes[route] = action;
  }

  render(url) {
    console.log(url);
    const temp = url.split('/')[1];
    console.log(temp);
    [...this.mainContentPages].forEach((item) => {
      item.style.display = 'none';
    });
    this.routes[temp] ? this.routes[temp]() : this.routes['404']();
  }
}
