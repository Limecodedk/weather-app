import { gsap } from "gsap";

class Calculate {
  constructor(averagetemp, DOMObj) {

    //let getChildElements = document.querySelectorAll("#childCon > #block");
    let averagetempLength = averagetemp.length;


    for (let i = 0; i < averagetempLength; i++) {

      gsap.to(DOMObj[i], {
        duration: 1,
        scaleY: (averagetemp[i] / 10).toFixed(2),
        transformOrigin: "bottom",
        ease: "elastic.out(1, 0.3)"
      });


      const resultAverageColor = averagetemp[i] > 10 && averagetemp[i] < 20 ? '#F2A922'
        : averagetemp[i] > 20 ? '#F27F1B'
          : '#b4e0eb'

      console.log(resultAverageColor);

      document.querySelector(".maps" + i).style.backgroundColor = resultAverageColor;


      /*   if (averagetemp[i] > 10 && averagetemp[i] < 20) {
          document.querySelector("#childCon > .maps" + i).style.backgroundColor = "#F2A922";
        }
  
        else if (averagetemp[i] > 20) {
          document.querySelector("#childCon > .maps" + i).style.backgroundColor = "#F27F1B";
        }
  
        else {
          document.querySelector("#childCon > .maps" + i).style.backgroundColor = "#b4e0eb";
        }
   */

    }//END loop
  }
}

export default Calculate;