const ill3 = {
    game : null,
    sprite: new Image(),
    spriteSrc : 'http://easy-spacy.local/wp-content/themes/easy spacy/public/img/ill3.svg',
    frame : {
        sx: 0,
        sy: 0,
        sw: 1598,
        sh: 704,
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

export default ill3

/*
defaut = 1920
frame = 1598
ratio = frame/defaut
calc(fenetre - (frame*ratio))
*/