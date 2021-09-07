const ill2 = {
    game : null,
    sprite: new Image(),
    spriteSrc : 'http://easy-spacy.local/wp-content/themes/easy spacy/public/img/ill2.svg',
    frame : {
        sx: 0,
        sy: 0,
        sw: 1873,
        sh: 693,
        dx: 0,
        dy: 0,
        dw: 0,
        dh: 0
    },

    update(){
        this.defaultRatio = this.game.canvas.width / this.game.defaultWidth
        this.spaceWidth = Math.abs(this.game.canvas.width - (this.frame.sw * this.defaultRatio))
        this.frame.dw = this.game.canvas.width - this.spaceWidth
        this.frame.dh = this.frame.dw * this.ratio
        this.frame.dx = this.spaceWidth / 2
        this.game.renderSpriteFrame(this.frame, this.sprite)


    },

    init(game){
        this.game = game;
        this.defaultRatio = this.game.canvas.width / this.game.defaultWidth
        this.ratio = this.frame.sh / this.frame.sw
        this.spaceWidth = Math.abs(this.game.canvas.width - (this.frame.sw * this.defaultRatio))
        this.frame.dw = this.game.canvas.width - this.spaceWidth
        this.frame.dh = this.frame.dw * this.ratio
        this.frame.dx = this.spaceWidth / 2
        this.sprite.src = this.spriteSrc

    },
}

export default ill2