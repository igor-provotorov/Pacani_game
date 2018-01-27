BasicGame.Game = function(game) {
    this.music = null;
};

var played;

BasicGame.Game.prototype = {

    create: function() {

        this.shop_reached = false;

        this.music = this.add.audio('musarock');
        spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        this.speechStep = 0;
        this.score = 0;
        this.scoreText = '';
        this.spaceInp = true;
        this.spacePushed = false;
        this.spaceKey;
        this.shiftKey;
        this.spaceText;
        this.speechCloud;
        this.textCloud;
        this.styleCloud;
        this.styleSpace;
        this.spaceEnd = false;
        this.shop_start = 7000;
        this.shop_killed = false;

        this.timerText = '';
        this.timerCount = 0;
        this.timerMinutes = 59;
        this.timerSeconds = 0;

        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.world.setBounds(0, 0);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.shiftKey = this.input.keyboard.addKey(Phaser.Keyboard.SHIFT);

        this.input.keyboard.addKeyCapture([Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.SPACEBAR]);

        //bg creation

        for (let i = 0; i <= 100; i++) {
            background = this.add.sprite(i * 1282, 0, 'background');
        }

        //shop creation

        shop_back = this.add.sprite(this.shop_start, 420, 'shop_back');
        this.physics.arcade.enable(shop_back);
        shop_back.body.immovable = true;

        shop = this.add.sprite(this.shop_start, 420, 'shop_front');
        this.physics.arcade.enable(shop);
        shop.body.immovable = true;

        //location creation

        platforms = this.add.group();
        platforms.enableBody = true;

        let blockBuild = function(nX, nY, startX, startY, stepX, stepY, blockTag) {

            for (let i = 0; i < nX; i++) {
                for (let j = 0; j < nY; j++) {
                    let ledge = platforms.create(startX + (i * stepX), startY + (j * stepY), blockTag);
                    ledge.body.immovable = true;
                }
            }
        };

        blockBuild(100, 1, 0, 600, 142, 0, 'ground');
        blockBuild(3, 20, 0, 0, 62, 30, 'brick');
        blockBuild(1, 4, 30, 10, 0, 145, 'window');
        blockBuild(1, 1, 184, 456, 0, 0, 'padik_top');
        blockBuild(3, 1, 186, 576, 38, 0, 'padik_bottom');
        blockBuild(1, 1, this.shop_start, 420, 0, 0, 'shop_obstacle_top');
        blockBuild(1, 1, this.shop_start + 170, 520, 0, 0, 'shop_obstacle_right');
        blockBuild(1, 1, 60, 365, 0, 0, 'cat');
        blockBuild(1, 1, 900, 495, 0, 0, 'toilet');
        blockBuild(1, 1, 1100, 416, 0, 0, 'garage');
        blockBuild(1, 1, 1490, 372, 0, 0, 'house1');
        blockBuild(1, 1, 1650, 390, 0, 0, 'carwash');
        blockBuild(1, 1, 2080, 465, 0, 0, 'car');
        blockBuild(1, 1, 1580, 317, 0, 0, 'house1top');
        blockBuild(1, 1, 1890, 317, 0, 0, 'house1top');
        blockBuild(1, 1, 2850, 490, 0, 0, 'tlf');
        blockBuild(1, 1, 2970, 382, 0, 0, 'house2');
        blockBuild(4, 1, 2990, 450, 145, 0, 'window');
        blockBuild(1, 1, 3800, 339, 0, 0, 'house3');
        blockBuild(3, 1, 3980, 400, 200, 0, 'window');
        blockBuild(1, 1, 5270, 344, 200, 0, 'brickblock');
        blockBuild(1, 1, 5263, 355, 0, 0, 'brickblockAside');
        blockBuild(1, 1, 5262, 440, 0, 0, 'brickblockAside');
        blockBuild(1, 1, 5261, 525, 0, 0, 'brickblockAside');
        blockBuild(1, 2, 5600, 238, 0, 106, 'brickblock2');
        blockBuild(1, 2, 6000, 238, 0, 106, 'brickblock2');


        this.add.sprite(250, 469, 'padik_pillar');
        this.add.sprite(384, 450, 'tree1');
        this.add.sprite(340, 545, 'bush');
        this.add.sprite(315, 553, 'urn');
        this.add.sprite(380, 545, 'bush');
        this.add.sprite(405, 545, 'bush');
        this.add.sprite(490, 545, 'bush');
        this.add.sprite(510, 545, 'bush');
        this.add.sprite(535, 545, 'bush');
        this.add.sprite(360, 550, 'bench');
        this.add.sprite(375, 525, 'friend1');
        this.add.sprite(320, 545, 'friend2');
        this.add.sprite(460, 522, 'friend3');
        this.add.sprite(440, 580, 'beer');
        this.add.sprite(430, 580, 'beer');
        this.add.sprite(435, 582, 'beer');
        this.add.sprite(360, 590, 'beer2');
        this.add.sprite(320, 582, 'beer');
        this.add.sprite(2500, 545, 'bush');
        this.add.sprite(2515, 545, 'bush');
        this.add.sprite(2540, 545, 'bush');
        this.add.sprite(2545, 545, 'bush');
        this.add.sprite(2560, 545, 'bush');
        this.add.sprite(2580, 545, 'bush');
        this.add.sprite(2700, 450, 'tree1');
        this.add.sprite(4805, 450, 'tree1');
        this.add.sprite(4755, 545, 'bush');
        this.add.sprite(4775, 545, 'bush');
        this.add.sprite(4885, 545, 'bush');
        this.add.sprite(3805, 545, 'bush');
        this.add.sprite(4830, 545, 'bush');
        this.add.sprite(4845, 545, 'bush');

        // dogs creation

        this.dog = this.add.group();
        this.dogConstructor = function(nX, nY, tag) {
            let dogImp = this.dog.create(nX, nY, tag)
            this.physics.arcade.enable(dogImp);
            dogImp.body.gravity.y = 1000;
            dogImp.body.collideWorldBounds = true;
            dogImp.animations.add('right', [0, 1, 2, 3], 8, true);
            dogImp.animations.add('left', [5, 6, 7, 8, 9], 8, true);
        }
        this.dogConstructor(1400, 400, 'dog');
        this.dogConstructor(3600, 400, 'dog');
        this.dogConstructor(4555, 400, 'dog');

        //policemen creation

        this.policeman = this.add.group();
        this.policemanConstructor = function(nX, nY, tag) {
            let policemanImp = this.policeman.create(nX, nY, tag)
            this.physics.arcade.enable(policemanImp);
            policemanImp.body.gravity.y = 1000;
            policemanImp.body.collideWorldBounds = true;
            policemanImp.animations.add('left', [4, 5, 6, 7], 10, true);
            policemanImp.animations.add('right', [8, 9, 10, 11], 10, true);
        }
        this.policemanConstructor(2800, 400, 'policeman');
        this.policemanConstructor(5700, 400, 'policeman');

        //player creation

        player = this.add.sprite(570, 500, 'player');
        this.physics.arcade.enable(player);
        player.body.gravity.y = 1000;
        player.body.collideWorldBounds = true;
        player.animations.add('left', [5, 6, 7, 8], 7, true);
        player.animations.add('right', [1, 2, 3, 4], 7, true);

        //money creation

        money = this.add.group();
        money.enableBody = true;
        money.create(1760, 348, 'dollars');
        money.create(2900, 570, 'dollars');
        money.create(3700, 570, 'dollars');
        money.create(5320, 320, 'dollars');
        money.create(6700, 570, 'dollars');
        money.create(6800, 570, 'dollars');
        money.create(6900, 570, 'dollars');

        this.scoreText = this.add.text(16, 16, 'Cash: 0 BYN / 6 BYN', { fontSize: '32px', fill: '#FFFFFF' });
    },

    update: function() {

        player.body.velocity.x = 0;
        this.physics.arcade.collide(player, platforms);
        this.physics.arcade.collide(this.dog, platforms);
        this.physics.arcade.collide(this.policeman, platforms);

        //shop handle

        if (player.body.x > this.shop_start + 30 && this.shop_killed === false) {
            shop.alpha = 0;
            this.shop_killed = true;
        } else if (player.body.x < this.shop_start + 25 && this.shop_killed === true) {
            shop.alpha = 1;
            this.shop_killed = false;
        }
        if (player.body.x >= this.shop_start + 100) {
            this.shop_reached = true;
            if (this.speechStep === 19) {
                this.timerText.destroy();
                this.spaceInp = false
                this.speechStep++;
                this.timerMinutes = 0;
                player.animations.stop();
                player.frame = 0;
            }
            if (this.speechStep === 20) {
                this.speechCloud = this.add.sprite(this.shop_start + 135, 435, 'speech');
                this.speechCloud.anchor.set(0, -0.1);
                this.speechCloud.inputEnabled = true;
                this.styleCloud = { font: "16px Arial", fill: "black", wordWrap: true, wordWrapWidth: this.speechCloud.width, align: "center" };
                this.textCloud = this.add.text(0, 0, "Good evening!", this.styleCloud);
                this.textCloud.anchor.set(0.5);
                this.textCloud.x = Math.floor(this.speechCloud.x + this.speechCloud.width / 2);
                this.textCloud.y = Math.floor(this.speechCloud.y + this.speechCloud.height / 2);
                this.styleSpace = { font: "32px Arial", fill: "white", align: "center" };
                this.spaceText = this.add.text(this.shop_start + 160, 200, "Press space to continue and shift to skip", this.styleSpace);
                this.spaceText.anchor.setTo(0.5);
                this.speechStep++;
                this.spaceInp = false;
            }
            this.speechTemplate(21, this.shop_start + 60, 420, 'Bring me bear, and do it as fast as you can, skinnyboy');
            this.speechTemplate(22, this.shop_start + 135, 435, 'OFC. But can I take a look on your documents?');
            this.speechTemplate(23, this.shop_start + 60, 420, `Seems like... I forgot my passport`);
            this.speechTemplate(24, this.shop_start + 135, 435, `Whell, there is nothing I can help you with, sir`);
            this.speechTemplate(25, this.shop_start + 60, 420, `No, no, no, NOOOOOO`);
            if (this.speechStep === 26) {
                player.frame = 9;
            }
            this.speechTemplate(26, this.shop_start + 60, 420, `DEAR GOD WHY`);
            if (this.speechStep > 19 && this.shiftKey.isDown) {
                this.speechStep = 27;
                this.spaceInp = true;
                player.frame = 9;
            }
            if (this.speechStep === 27 && this.spaceInp === true) {
                this.speechCloud.kill();
                this.textCloud.destroy();
                this.spaceText.destroy();
                this.spaceEnd = true;
                this.speechStep++;
                this.timerCount = 0;
            }
            if (this.speechStep === 28 && this.timerCount === 50) {
                this.music.stop();
                played = true;
                this.state.start('GameOver');
            }

        }

        //player handle

        cursors = this.input.keyboard.createCursorKeys();
        if (this.speechStep > 17 && this.shop_reached === false) {
            if (cursors.left.isDown) {
                player.body.velocity.x = -300;
                player.animations.play('left');
            } else if (cursors.right.isDown) {
                player.body.velocity.x = 300;
                player.animations.play('right');
            } else {
                player.animations.stop();
                player.frame = 0;
            }
            if (cursors.up.isDown && player.body.touching.down && !this.physics.arcade.collide(player, platforms)) {
                player.body.velocity.y = -500;
            }
        }

        //camera handle

        this.camera.x = player.body.x - 500;
        this.timerText.x = this.camera.x + 980;
        this.scoreText.x = this.camera.x + 25;

        //dog II

        this.dogII = function(item) {
            if (player.body.y < item.body.y + 80 && player.body.y > item.body.y - 200) {
                if (player.body.x - item.body.x < 0 && player.body.x - item.body.x > -360) {
                    item.body.velocity.x = -400;
                    item.animations.play('left');
                } else if (player.body.x - item.body.x > 0 && player.body.x - item.body.x < 360) {
                    item.body.velocity.x = 400;
                    item.animations.play('right');
                } else {
                    item.animations.stop();
                    item.frame = 0;
                    item.body.velocity.x = 0;
                }
            } else {
                item.animations.stop();
                item.frame = 0;
                item.body.velocity.x = 0;
            }
        }
        this.dog.forEach(this.dogII);

        //policeman II

        this.policemanII = function(item) {
            if (player.body.y < item.body.y + 50 && player.body.y > item.body.y - 110) {
                if (player.body.x - item.body.x < 0 && player.body.x - item.body.x > -350) {
                    item.body.velocity.x = -100;
                    item.animations.play('left');
                } else if (player.body.x - item.body.x > 0 && player.body.x - item.body.x < 350) {
                    item.body.velocity.x = 100;
                    item.animations.play('right');
                } else {
                    item.animations.stop();
                    item.frame = 0;
                    item.body.velocity.x = 0;
                }
            } else {
                item.animations.stop();
                item.frame = 0;
                item.body.velocity.x = 0;
            }
        }
        this.policeman.forEach(this.policemanII);

        //dialog space button

        if (this.spaceKey.isDown) {
            this.spacePushed = true;
        }
        if (this.spaceKey.isUp && this.spacePushed == true) {
            this.spaceInp = true;
            this.spacePushed = false;
        }

        //money handle

        let collectMoney = function(player, dollars) {
            dollars.kill();
            this.score += 1;
            this.scoreText.text = 'Cash: ' + this.score + ' BYN / 6 BYN';
        };

        this.physics.arcade.collide(money, platforms);
        this.physics.arcade.overlap(player, money, collectMoney, null, this);

        //collide with policeman and dog

        if (this.physics.arcade.collide(this.policeman, player) || this.physics.arcade.collide(this.dog, player)) {

            this.music.stop();
            played = true;
            this.state.start('GameOver');
        }

        //starting dialog 

        this.speechTemplate = function(curStep, nX, nY, textTag) {

            if (this.speechStep === curStep && this.spaceInp == true) {
                this.speechCloud.kill();
                this.textCloud.destroy();
                this.speechCloud = this.add.sprite(nX, nY, 'speech');
                this.speechCloud.anchor.set(0, -0.1);
                this.speechCloud.inputEnabled = true;
                this.styleCloud = { font: "16px Arial", fill: "#black", wordWrap: true, wordWrapWidth: this.speechCloud.width, align: "center" };
                this.textCloud = this.add.text(0, 0, textTag, this.styleCloud);
                this.textCloud.anchor.set(0.5, 0.5);
                this.textCloud.x = Math.floor(this.speechCloud.x + this.speechCloud.width / 2);
                this.textCloud.y = Math.floor(this.speechCloud.y + this.speechCloud.height / 2);
                this.speechStep++;
                this.spaceInp = false;
            }
        };
        if (this.speechStep === 0 && this.spaceInp === true) {
            this.speechCloud = this.add.sprite(410, 420, 'speech');
            this.speechCloud.anchor.set(0, -0.1);
            this.speechCloud.inputEnabled = true;
            this.styleCloud = { font: "16px Arial", fill: "black", wordWrap: true, wordWrapWidth: this.speechCloud.width, align: "center" };
            this.textCloud = this.add.text(0, 0, "Yo man! ", this.styleCloud);
            this.textCloud.anchor.set(0.5);
            this.textCloud.x = Math.floor(this.speechCloud.x + this.speechCloud.width / 2);
            this.textCloud.y = Math.floor(this.speechCloud.y + this.speechCloud.height / 2);
            this.styleSpace = { font: "32px Arial", fill: "white", align: "center" };
            this.spaceText = this.add.text(650, 200, "Press space to continue and shift to skip", this.styleSpace);
            this.spaceText.anchor.setTo(0.5);
            this.speechStep++;
            this.spaceInp = false;
        }

        this.speechTemplate(1, 530, 420, 'Whah?');
        this.speechTemplate(2, 410, 420, 'Look at Afon, he is already drunk as hell!');
        this.speechTemplate(3, 280, 450, 'Buerglhvbreee');
        this.speechTemplate(4, 410, 420, 'Oh man, I wish I was him');
        this.speechTemplate(5, 530, 420, "Yee, I'm hardly drunk too, few shots are a need");
        this.speechTemplate(6, 350, 420, "Damn, I also wouldn't mind to have a few more!");
        this.speechTemplate(7, 410, 420, "Have you got money? I have got like a nickel");
        this.speechTemplate(8, 350, 430, "No, I'm empty");
        this.speechTemplate(9, 530, 420, "Also have nothing. And btw, look at the time!");
        this.speechTemplate(10, 410, 420, "Jees, nearest beer shop is closing soon!");
        this.speechTemplate(11, 350, 430, "OK then, see you tomorrow");
        this.speechTemplate(12, 410, 420, "Damn, how sad. I'll bring Afon back to home");
        this.speechTemplate(13, 530, 420, "NO WAY");
        this.speechTemplate(14, 410, 420, "???");
        this.speechTemplate(15, 530, 420, "No way. I'll get the booze no matter what!");
        this.speechTemplate(16, 350, 430, "Madman... Btw, shop is closing in 1 minute, so RUN!");

        if (this.speechStep === 17 && this.spaceInp === true) {
            this.speechCloud.kill();
            this.textCloud.destroy();
            this.spaceText.destroy();
            this.spaceEnd = true;
            this.speechStep++;
            this.music.play();
        }
        if (this.shiftKey.isDown && this.speechStep < 17) {
            this.speechStep = 17;
            this.speechCloud.kill();
            this.textCloud.destroy();
            this.spaceText.destroy();
            this.spaceEnd = true;
            this.speechStep++;
            this.music.play();
        }
        if (this.speechStep === 18) {
            this.timerText = this.add.text(0, 16, '23:58:00', { fontSize: '32px', fill: '#FFFFFF' });
            this.speechStep++;
        }

        //timer handle
        if (this.speechStep >= 18) {
            if (this.timerCount === 60) {
                this.timerSeconds++;
                this.timerCount = 0;
                if (this.timerSeconds === 60) {
                    this.timerSeconds = 0;
                    this.timerMinutes++;
                    if (this.timerMinutes === 60) {
                        this.music.stop();
                        played = true;
                        this.state.start('GameOver');
                    }
                }
            }

            this.timerCount++;
            if (this.shop_reached === false) {
                if (this.timerSeconds < 10) {
                    this.timerText.text = '23:' + this.timerMinutes + ':0' + this.timerSeconds;
                } else {
                    this.timerText.text = '23:' + this.timerMinutes + ':' + this.timerSeconds;
                }
            }
        }
    },

    quitGame: function(pointer) {
        this.state.start('MainMenu');
    }

};