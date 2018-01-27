let BasicGame = {};

BasicGame.Boot = function(game) {

};

BasicGame.states = {
    MAIN_MENU: 'Main Menu',
    GAME_OVER: 'Game Over'
};
BasicGame.state = null;

BasicGame.Boot.prototype = {

    init: function() {

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.input.maxPointers = 1;

        this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop) {
            this.scale.pageAlignHorizontally = true;
        } else {
            this.scale.setMinMax(480, 260, 1138, 640);
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
        }

    },

    preload: function() {

        this.load.image('preloaderBackground', 'assets/preloader/loading_background.png');
        this.load.image('preloaderBar', 'assets/preloader/loading.png');

    },

    create: function() {

        this.state.start('Preloader');
    }

};