// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, playerNumber){
        super(scene, x, y, texture, frame, playerNumber);

        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isFiring = false;      // track rocket's firing status
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
        this.playerNumber = playerNumber;
    }

    update(){
        // single player
        if(game.settings.playerNum == 1){
            // left/right movement
            if(!this.isFiring){
                if((keyLEFT.isDown || keyA.isDown) && this.x >= 47){
                    this.x -= 2;
                }
                else if((keyRIGHT.isDown || keyD.isDown) && this.x <= 578){
                    this.x += 2;
                }
            }
            
            // fire button (NOT spacebar)
            if(Phaser.Input.Keyboard.JustDown(keyUP) || Phaser.Input.Keyboard.JustDown(keyW)){
                if(this.isFiring != true){
                    this.sfxRocket.play(); // play sfx
                }
                this.isFiring = true;

            }

            // if fired, move up
            if(this.isFiring && this.y >= 108){
                if((keyLEFT.isDown || keyA.isDown) && this.x >= 47){
                    this.x -= 2;
                }
                else if((keyRIGHT.isDown || keyD.isDown) && this.x <= 578){
                    this.x += 2;
                }
                this.y -= 2;
            }
        }
        else{
            // two-player/three-player mode
            
            // player 1 control
            if(this.playerNumber == 3){
                // fire for player3
                if(this.isFiring && this.y >= 108){
                    this.y -= 2;
                }
            }
            else{
                if(this.playerNumber == 1){
                    if(!this.isFiring){
                        if(keyA.isDown && this.x >= 47){
                            this.x -= 2;
                        }
                        else if(keyD.isDown && this.x <= 578){
                            this.x += 2;
                        }
                    }
                    
                    // fire button (NOT spacebar)
                    if(Phaser.Input.Keyboard.JustDown(keyW)){
                        if(this.isFiring != true){
                            this.sfxRocket.play(); // play sfx
                        }
                        this.isFiring = true;
        
                    }
        
                    // if fired, move up
                    if(this.isFiring && this.y >= 108){
                        if(keyA.isDown && this.x >= 47){
                            this.x -= 2;
                        }
                        else if(keyD.isDown && this.x <= 578){
                            this.x += 2;
                        }
                        this.y -= 2;
                    }
                }
                else{ // player 2 control
                    if(!this.isFiring){
                        if(keyLEFT.isDown && this.x >= 47){
                            this.x -= 2;
                        }
                        else if(keyRIGHT.isDown && this.x <= 578){
                            this.x += 2;
                        }
                    }
                    
                    // fire button (NOT spacebar)
                    if(Phaser.Input.Keyboard.JustDown(keyUP)){
                        if(this.isFiring != true){
                            this.sfxRocket.play(); // play sfx
                        }
                        this.isFiring = true;
        
                    }
        
                    // if fired, move up
                    if(this.isFiring && this.y >= 108){
                        if(keyLEFT.isDown && this.x >= 47){
                            this.x -= 2;
                        }
                        else if(keyRIGHT.isDown && this.x <= 578){
                            this.x += 2;
                        }
                        this.y -= 2;
                    }
                }
            }
        }

        // reset on miss
        if(this.y <= 108){
            this.isFiring = false;
            this.y = 431;
        }
    }

    // reset rocket to "ground"
    reset(){
        this.isFiring = false;
        this.y = 431;
    }
}