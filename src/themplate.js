class themplate {
  constructor() {


    let myImageRef = [

      "../assets/zebra.jpg",
      "../assets/drums.jpg",
      "../assets/night.jpg"
    ];

    let myFooter = [
      "lalala", "hey med dig", "farvel og tak",
    ];

    let header = document.createElement('h2');
    header.className = "header"
    document.body.appendChild(header);


    header.innerHTML = "Fed overskrift";

    let main = document.createElement('div');
    main.id = "main"

    document.body.appendChild(main);



    myImageRef.forEach((item) => {

      let childrenOfMain = document.createElement('div');
      childrenOfMain.className = "card"
      main.appendChild(childrenOfMain);

      let myImg = document.createElement('img');
      myImg.src = item;
      childrenOfMain.appendChild(myImg)

    })


    myFooter.forEach(() => {
      let footer = document.createElement('div')
      footer.className = "pagefooter"
      main.appendChild(footer);


      let footerContent = document.createElement('p');
      footer.appendChild(footerContent)
    })



  }//END Constructor 
}

export default themplate;