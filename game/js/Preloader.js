BasicGame.Preloader = function(game) {

    this.background = null;
    this.preloadBar = null;

    this.ready = false;

};

BasicGame.Preloader.prototype = {

    preload: function() {

        this.background = this.add.sprite(0, 0, 'preloaderBackground');
        this.preloadBar = this.add.sprite(this.world.centerX - 200, this.world.centerY, 'preloaderBar');

        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('background', 'assets/game/background.png');
        this.load.image('ground', 'assets/game/ground.png');
        this.load.image('brick', 'assets/game/brick.png');
        this.load.image('window', 'assets/game/window.png');
        this.load.image('padik_top', 'assets/game/padik_top.png');
        this.load.image('padik_pillar', 'assets/game/padik_pillar.png');
        this.load.image('padik_bottom', 'assets/game/padik_bottom.png');
        this.load.image('bush', 'assets/game/bush.png');
        this.load.image('urn', 'assets/game/urn.png');
        this.load.image('tree1', 'assets/game/tree1.png');
        this.load.image('bench', 'assets/game/bench.png');
        this.load.image('friend1', 'assets/game/friend1.png');
        this.load.image('friend2', 'assets/game/friend2.png');
        this.load.image('friend3', 'assets/game/friend3.png');
        this.load.image('beer', 'assets/game/beer.png');
        this.load.image('beer2', 'assets/game/beer2.png');
        this.load.image('shop_front', 'assets/game/shop_front.png');
        this.load.image('shop_back', 'assets/game/shop_back.png');
        this.load.image('shop_obstacle_top', 'assets/game/shop_obstacle_top.png');
        this.load.image('shop_obstacle_right', 'assets/game/shop_obstacle_right.png');
        this.load.spritesheet('player', 'assets/game/player.png', 60, 85);
        this.load.spritesheet('dog', 'assets/game/hell-hound-run.png', 95, 42);
        this.load.spritesheet('policeman', 'assets/game/policeman.png', 46, 76);
        this.load.image('dollars', 'assets/game/money.png');
        this.load.audio('brigada', 'assets/mainmenu/brigada.mp3');
        this.load.image('title-page', 'assets/mainmenu/carpet.png');
        this.load.image('playButton', 'assets/mainmenu/startGame.png', );
        this.load.audio('brigada2', 'assets/mainmenu/brigada2.mp3');
        this.load.image('speech', 'assets/game/speech.png');
        this.load.audio('musarock', 'assets/game/musarock.mp3');
        this.load.image('MadMan', 'assets/mainmenu/MadMaN.png');
        this.load.image('descriptionButton', 'assets/mainmenu/Description.png', );
        this.load.image('backButton', 'assets/description/Back.png');
        this.load.image('arrows', 'assets/description/arrows.png');
        this.load.image('soundOn', 'assets/game/soundOn.png');
        this.load.image('soundOff', 'assets/game/soundOff.png');
        this.load.image('gameover', 'assets/gameover/GameOver.png');
        this.load.image('restartButton', 'assets/gameover/Restart.png');
        this.load.image('backToMenu', 'assets/gameover/backtomenu.png');
        this.load.image('cat', 'assets/game/cat.png');
        this.load.image('toilet', 'assets/game/toilet.png');
        this.load.image('garage', 'assets/game/garage.png');
        this.load.image('house1', 'assets/game/house1.png');
        this.load.image('carwash', 'assets/game/carwash.png');
        this.load.image('car', 'assets/game/car.png');
        this.load.image('house1top', 'assets/game/house1top.png');
        this.load.image('tlf', 'assets/game/tlf.png');
        this.load.image('house2', 'assets/game/house2.png');
        this.load.image('water', 'assets/game/water.png');
        this.load.image('house3', 'assets/game/house3.png');
        this.load.image('brickblock', 'assets/game/brickblock.png');
        this.load.image('brickblockAside', 'assets/game/brickblockAside.png');
        this.load.image('brickblock2', 'assets/game/brickblock2.png');
    },

    create: function() {

        this.preloadBar.cropEnabled = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    },

    update: function() {

        if (this.cache.isSoundDecoded('brigada') && this.ready == false) {
            this.ready = true;
            this.state.start('MainMenu');
        }

    }

};