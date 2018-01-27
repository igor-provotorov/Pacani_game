BasicGame.DescriptionState = function (game) {

        this.backButton = null;
};

let textStyle;

BasicGame.DescriptionState.prototype = {

    create: function () {

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;


        this.music = this.add.audio('brigada');
        this.add.sprite(0, 0, 'title-page');
        this.add.sprite(190, 20, 'MadMan');
        this.add.sprite(420, 170, 'descriptionButton');
        textStyle = { font: "30px Arial", fill: "white", align: "left" };
        this.add.text(120, 250, "To expand the game to full screen press   F11 button.", textStyle);
        this.add.text(120, 320, "For movement use: ", textStyle);
        this.add.sprite(400, 300, 'arrows');
        this.add.text(120, 410, "Beware of cops and dogs.", textStyle);

        this.backButton = this.add.button(120, 480, 'backButton', this.back, this, 0, 1, 0);

    },

    update: function () {},

    back: function (pointer) {

        this.state.start('MainMenu');

    }

};
