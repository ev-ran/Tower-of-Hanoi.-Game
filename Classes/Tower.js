class Tower {

    constructor(numberOfRings, element) {
        this.numberOfRings = numberOfRings;
        this.towerMaxWidth = 400;
        this.towerMinWidth = 50;
        this.towerHeight = 650;
        // this.element = document.querySelector('#t2');
        this.element = element;
        this.countClick = 1;
    }


    ringHeight() {
        let h = this.towerHeight / this.numberOfRings;
        return h > 80 ? 60 : h;

    }


    createTower() {

        // console.log("ringHeight:  " + this.ringHeight);
        let colors_arr = ["rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,128,0)", "rgb(255,255,51)", "rgb(229,43,80)", "rgb(77,195,255)", "rgb(132,222,2)", "rgb(255,51,255)", "rgb(153,0,51)", "rgb(175,0,42)"];

        let ringHeight = this.ringHeight();
        let i = 0;


        for (let i = 0; i < this.numberOfRings; i++) {

            let colorNum = Math.floor(Math.random() * 10);

            this.ringWidth = this.towerMaxWidth - i * ((this.towerMaxWidth - this.towerMinWidth) / (this.numberOfRings - 1));

            let ring = document.createElement('div');

            ring.setAttribute('style', 'border:1px solid black;  ');

            ring.style.height = ringHeight + "px";
            ring.style.width = this.ringWidth + "px";
            ring.style.background = "radial-gradient(rgba(10,10,10,0.0), rgba(10,10,10,0.6))";
            ring.style.backgroundColor = colors_arr[colorNum];
            ring.style.borderRadius = "25px";

            this.element.append(ring);

        }
    }

  

   
}