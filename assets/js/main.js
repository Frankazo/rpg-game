let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
  },
}

let game = new Phaser.Game(config)

function preload() {
  this.load.image('button1', 'assets/images/ui/blue_button01.png')
}

function create() {
  // var button = this.add.image(400, 300, 'button1')
  // button.setOrigin(0.5,0.5)

  this.add.sprite(400,300,'button1' )
}
