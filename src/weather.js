import { gsap } from "gsap";
import mSun from "../assets/sun-big-white.png";
import Calculate from "./Calculate";
import data from './jason/temperature.json';

export default class weather {

  constructor() {

    /*  console.log(data); */

    this.data = data;

    /* Indsæt baggrund billede */

    this.sun = document.createElement('div');
    this.sun.id = 'sun';
    document.body.appendChild(this.sun);

    this.sun.innerHTML = `<img src =${mSun} />`;

    /*  En anden måde at indsætte billede på
    this.sun.innerHTML = "<img src=" + mSun + " />" */

    /* GSAP animation */

    gsap.to('#sun', {
      duration: 30,
      rotation: 360,
      transformOrigin: "center",
      repeat: -1
    });


    // --- Web animations API --- //
    /* 
        let cubeRotating = [
          { transform: 'rotate(0deg)' },
          { transform: 'rotate(360deg)' }
        ]
    
        let cubeTiming = {
          duration: 30000,
          iterations: Infinity
        }
    
        document.querySelector('#sun').animate(
          cubeRotating,
          cubeTiming
        ) */

    /* Opret en div i HTML */
    this.container = document.createElement('div');

    /* Placere div i HMTL body */
    document.body.appendChild(this.container);

    /* Tilføj et id */
    this.container.id = "container";

    /* Tilføj et ClassName */
    this.container.className = "container";

    this.container.innerHTML = this.data.month.map((item, index) => {

      return ` 
          <div id="childCon">
            <div class= ${"maps" + index} id='block'></div>
            <div id="temperature">
              ${this.data.temperature[0].averageTemperature[index]}
            </div >
            <div class="month">
              ${item}
            </div>
          </div >
        `
    }).join('');

    let getChildElements = document.querySelectorAll("#childCon > #block");

    let cal = new Calculate(this.data.temperature[0].averageTemperature, getChildElements);


    this.yearContainer = document.createElement("div");
    this.yearContainer.id = "yearContainer";
    this.yearContainer.className = "yearContainer";
    document.body.appendChild(this.yearContainer);
    this.yearContainer.innerHTML = "" +
      this.data.temperature.map((item, index) => {
        return ` 
 <div class = '${"year" + index}' id='year' dataindex=${index} >${this.data.temperature[index].year}</div>
 
 `; //END return
      })
        .join("") + "";

    this.getchildYearCon = document.querySelectorAll("#yearContainer > #year");

    this.getchildYearCon.forEach((item) => {
      item.addEventListener("click", (event) => {
        for (let i = 0; i < this.getchildYearCon.length; i++) {
          this.getchildYearCon[i].style.backgroundColor = "#36aad8"
        }

        let currentDataIndex = event.currentTarget.dataset.index;
        let getDataFromIndex = this.data.temperature[currentDataIndex].averageTemperature;

        this.cal = new Caulculate(getDataFromIndex);

        event.currentTarget.style.backgroundColor = "#04658c";
      });
    });

  } // END constructor
} // END class


/* "temperature": [
  "year": "2018",
  "averageTemperature":

] */