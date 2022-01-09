export class MainMenu extends Phaser.Scene {
  constructor() {
    super('main-menu');
  }

  /**
   * Called after init, assets get loaded here
   */
  preload() { 
    this.load.image('title-screen', 'assets/main-menu/TitleScreen.jpg');
  }

  /**
   * Called after preload, assets get initialized here
   */
  create() { 
    //#region initial setup
    let stage = {
      center : {
        x: this.sys.canvas.width / 2,
        y: this.sys.canvas.height / 2
      }, 
      width: this.sys.canvas.width,
      height: this.sys.canvas.height
    }

    let background = this.add.image(0,0, 'title-screen');
    background.setOrigin(0);
    background.setSize(stage.width, stage.height);
    background.setDisplaySize(stage.width, stage.height);
    this.cameras.main.fadeIn(1000);
    //#endregion
  }

  /**
   * Called after create and run on each cycle of the game loop 
   */
  update() { }

   /**
   * Called after update and run on each cycle of the game loop
   */
  render() { }
}