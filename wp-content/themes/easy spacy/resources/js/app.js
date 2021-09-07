
import ill4 from "./ill4";
import ill1 from "./ill1";
import ill2 from "./ill2";
import ill3 from "./ill3";


const game = {
    canvas : document.querySelector('#canvas'),
    context: null,
    ill1,
    ill2,
    ill3,
    ill4,
    defaultWidth : 1920,

    init(){
        this.context = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.ill4.init(this);

        this.ill3.init(this);
        this.ill2.init(this);
        this.ill1.init(this);
        this.canvas.height = this.ill1.frame.dh;

        this.ill1.sprite.addEventListener('load', ()=>{
            this.animate()
        }, false)
        this.resize();
    },

    animate(){
        this.animation = window.requestAnimationFrame(()=>{
            this.animate()
        });
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.ill4.update();
        this.ill3.update();
        this.ill2.update();
        this.ill1.update();

    },

    renderSpriteFrame(coordinates, image){
        this.context.drawImage(
            image,
            coordinates.sx,
            coordinates.sy,
            coordinates.sw,
            coordinates.sh,
            coordinates.dx,
            coordinates.dy,
            coordinates.dw,
            coordinates.dh,
        )
    },

    resize() {
        window.addEventListener('resize', ()=> {
            this.canvas.width = window.innerWidth;
            this.canvas.height = ill1.frame.dh;
        })
    }
}

game.init();