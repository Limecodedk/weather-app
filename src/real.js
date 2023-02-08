import { gsap } from 'gsap';


/* Oprettelse af en classe. En classe skal altid have en constructo */
class Reel {

  /* Static lever kun i classen og kan ikke kaldes fra andre steder */
  static myvar = "pop";

  constructor() {

    let myImageRef = [

      "../assets/zebra.jpg",
      "../assets/drums.jpg",
      "../assets/night.jpg"];


    /* Oprettelse af container hvor alt indholdet ligget inde i.*/
    let main = document.createElement('div');
    main.id = "main"
    document.body.appendChild(main);


    /*  */
    myImageRef.forEach((item) => {

      let childrenOfMain = document.createElement('div');
      childrenOfMain.className = "mc"
      main.appendChild(childrenOfMain);

      let myImg = document.createElement('img');
      myImg.src = item;
      childrenOfMain.appendChild(myImg)




      childrenOfMain.addEventListener("mouseover", (event) => {

        gsap.to(event.currentTarget, {
          duration: 1,
          scale: 1.1,
          ease: "elastic.out"
        })
      })

      childrenOfMain.addEventListener("mouseout", (event) => {

        gsap.to(event.currentTarget, {
          duration: 1,
          scale: 1,
          ease: "elastic.out"
        })
      })


    })

  } //END Constructor 


}

export default Reel;
