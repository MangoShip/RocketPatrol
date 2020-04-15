class OPMenu extends Phaser.Scene{
    constructor(){
        super("OPMenuScene");
    }

    preload(){
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create(){
        // title display
        let titleConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: "#843605",
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWith: 0
        }

        // control display
        let controlConfig = {
            fontFamily: 'Courier',
            fontSize: '22px',
            backgroundColor: 'pink',
            color: "#843605",
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWith: 0
        }

        // difficulty display
        let diffConfig = {
            fontFamily: 'Courier',
            fontSize: '22px',
            backgroundColor: '#00FF00',
            color: '#000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWith: 0
        }

        // return display
        let returnConfig = {
            fontFamily: 'Courier',
            fontSize: '22px',
            backgroundColor: 'black',
            color: 'white',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWith: 0
        }
        
        // display menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        this.add.text(centerX, centerY - 80, 'Singleplayer mode', titleConfig).setOrigin(0.5);
        this.add.text(centerX, centerY - 13, 'Use ←→ arrows, A and D, or mouse to move', controlConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 17, 'and (↑, W, or click) to Fire', controlConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 80, 'Press ← for Easy or → for Hard', diffConfig).setOrigin(0.5);
        this.add.text(10,437, 'Press ↓ to go back', returnConfig);
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            // easy mode
            game.settings = {
                playerNum: 1,
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            // hard mode
            game.settings = {
                playerNum: 1,
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
        if(Phaser.Input.Keyboard.JustDown(keyDOWN)){
            // go back to main menu
            this.sound.play('sfx_select');
            this.scene.start("menuScene");
        }
    }
}