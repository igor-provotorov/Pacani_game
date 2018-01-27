BasicGame.MainMenu = function(game) {

    this.music = null;
    this.playButton = null;
    this.descriptionButton = null;

};

BasicGame.MainMenu.prototype = {

    create: function() {

        if (!this.music || BasicGame.state === BasicGame.states.GAME_OVER) {
            BasicGame.state = BasicGame.states.MAIN_MENU;
            this.music = this.add.audio('brigada');
            this.music.play();
        }
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.add.sprite(0, 0, 'title-page');
        this.add.sprite(220, 200, 'MadMan');
        this.playButton = this.add.button(420, 350, 'playButton', this.startGame, this, 0, 1, 0);
        this.descriptionButton = this.add.button(420, 400, 'descriptionButton', this.description, this, 0, 1, 0);

    },

    update: function() {},

    startGame: function(pointer) {

        this.music.stop();

        this.state.start('Game');

    },

    description: function(pointer) {

        this.state.start('descriptionState');

    }

};