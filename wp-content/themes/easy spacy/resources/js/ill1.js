const ill1 = {
    game : null,
    sprite: new Image(),
    spriteSrc : 'http://easy-spacy.local/wp-content/themes/easy spacy/public/img/ill1.svg',
    frame : {
        sx: 0,
        sy: 0,
        sw: 1920,
        sh: 802,
        dx: 0,
        dy: 0,
        dw: 0,
        dh: 0
    },

    update(){
        this.ratio = this.frame.sh / this.frame.sw
        this.frame.dw = this.game.canvas.width
        this.frame.dh = this.frame.dw * this.ratio
        this.game.renderSpriteFrame(this.frame, this.sprite)
    },

    init(game){
        this.game = game;
        this.ratio = this.frame.sh / this.frame.sw
        this.frame.dw = this.game.canvas.width
        this.frame.dh = this.frame.dw * this.ratio
        this.sprite.src = this.spriteSrc
    },
}

export default ill1