BasicGame.GameOver = function(game) {

    this.music = null;
    this.restartButton = null;
    this.backToMenu = null;

};
BasicGame.GameOver.prototype = {

    create: function() {

        this.music = this.add.audio('brigada2');
        this.music.play();

        this.add.sprite(0, 0, 'title-page');

        this.add.sprite(180, 170, 'gameover');
        this.restartButton = this.add.button(320, 300, 'restartButton', this.startGame, this, 0, 1, 0);
        this.backToMenu = this.add.button(320, 380, 'backToMenu', this.Menu, this, 0, 1, 0);


    },

    update: function() {},

    startGame: function(pointer) {

        this.music.stop();
        this.state.start('Game');
    },

    Menu: function(pointer) {

        this.music.stop();

        BasicGame.state = BasicGame.states.GAME_OVER;
        this.state.start('MainMenu');

    }

};