export class DARKSKY {
  constructor() {
    this.api = 'https://api.darksky.net/forecast';
    this.key = '690796d626468e9b52a179e93f0200c9';
    this.proxy = 'https://cors-anywhere.herokuapp.com';
    this.cardWrapper = document.querySelector('.card-wrapper');
    this.div = document.createElement('div');
    this.template = '';
  }

  getResource = (coord) => {
    fetch(`${this.proxy}/${this.api}/${this.key}/${coord}?units=si`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error(`Данные не были полученны ${resp.status}`);
      })
      .then((data) => this.render(data));
  };

  render = (data) => {
    console.log(data);
    this.cardWrapper.innerHTML = '';
    this.template = `<div class="card" style="width: 18rem;">
                        <div class="card-header">
                          ${data.timezone}
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">latitude: ${data.latitude}</li>
                          <li class="list-group-item">longitude: ${data.longitude}</li>
                          <li class="list-group-item">summary: ${data.currently.summary}</li>
                          <li class="list-group-item">temperature: ${data.currently.temperature}</li>
                          <li class="list-group-item">windSpeed: ${data.currently.windSpeed}</li>
                          <li class="list-group-item">cloudCover: ${data.currently.cloudCover}</li>
                        </ul>
                      </div>`;

    this.div.innerHTML = this.template;
    this.cardWrapper.append(this.div);
  };
}

