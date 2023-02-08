import personData from './jason/me.json';

export default class aboutme {
  constructor() {

    this.personData = personData;

    this.container = document.createElement('div');
    document.body.appendChild(this.container);
    this.container.id = "block";
    this.container.className = "container";

    this.container.innerHTML = `${this.personData.EmilData}`







    /* 
        this.container = document.createElement('div');
        this.container.id = "container";
        this.container.className = "container";
        document.body.appendChild(this.container);
        this.container.innerHTML = '' + this.personData.map((item, index) => {
          return ` 
            <div class = '${"maps" + index}' id='block'>${item}</div>
            `
        }).join('') + ''; */
  }
}


