let config = {
  renderer: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

let game = new Phaser.Game(config);

//function to bring in images for our application, such as the background.
function preload() { 
  this.load.image("background", "assets/background.png");
  this.load.image("road", "assets/road.png");
  this.load.image("column", "assets/column.png");
  this.load.spritesheet("bird", "assets/bird.png", {
    frameWidth: 64,
    frameHeight: 96,
  });

}

//global scopes that we can use in differents function
let bird; 
let hasLanded = false;
let cursors;
let hasBumped = false;
let isGameStarted = false;
let messageToPlayer;

//function to generate elements that will appear in our game, such as images that were brought in from the preload() function.
function create() { 
  const background = this.add.image(0, 0, "background").setOrigin(0, 0);

  //we are making a call to the Arcade Physics system in Phaser, this will allow us to apply a physics simulation to the roads we create.
  const roads = this.physics.add.staticGroup();

  //we create the columns top and bottom
  const topColumns = this.physics.add.staticGroup({
  key: "column",
  repeat: 1,
  setXY: { x: 200, y: 0, stepX: 300 },
});

  const bottomColumns = this.physics.add.staticGroup({
  key: "column",
  repeat: 1,
  setXY: { x: 350, y: 400, stepX: 300 },
});

  const road = roads.create(400, 568, "road").setScale(2).refreshBody();

  //Creating the bird
                          //sprite=dynamic!!!!
  bird = this.physics.add.sprite(0, 50, 'bird').setScale(2);
  bird.setBounce(0.2); //the bird should bound slightly if it collides with something.
  bird.setCollideWorldBounds(true);
  this.physics.add.collider(bird, road); //we make sure the bird lands on top of the road

  //The bird has landed
  this.physics.add.overlap(bird, road, () => (hasLanded = true), null, this);
  this.physics.add.collider(bird, road);

  //.createCursorKeys() method "creates and returns an object containing 4 hotkeys for Up, Down, Left and Right, and also Space Bar and shift."
  cursors = this.input.keyboard.createCursorKeys();

  //if the bird hits one of the columns, hasBumped will be set to true.
  //this.physics.add.overlap(object1, object2, callback, condition, context);
  this.physics.add.overlap(
    bird,
    topColumns,
    () => (hasBumped = true),
    null,
    this
  );
  this.physics.add.overlap(
    bird,
    bottomColumns,
    () => (hasBumped = true),
    null,
    this
  );

  //the bird doesn't pass the columns
  this.physics.add.collider(bird, topColumns);
  this.physics.add.collider(bird, bottomColumns);

  
  //Instructions for the player
  messageToPlayer = this.add.text(
    0,
    0,
    `Press space bar to start`,
    {
    fontFamily: '"Press Start 2P", system-ui',
    fontSize: "16px",
    color: "#000000",
    }
  );

  Phaser.Display.Align.In.BottomCenter(messageToPlayer, background, 0, 50);
  
}

//function will be used to update the "bird"object in the game.
function update() {
  if (cursors.up.isDown) {
    bird.setVelocityY(-160); //if the user presses the "up" button, then give the bird an upward velocity of -160. This will move it upwards.
  }

  if (cursors.up.isDown && !hasLanded) {
    bird.setVelocityY(-160);
  }

  //the bird moves to the right (in the axis x)
  if (!hasLanded) {
    bird.body.velocity.x = 50;
  }

  //the bird doesn't move if it is the ground
  if (hasLanded) {
    bird.body.velocity.x = 0;
  }

  if (cursors.up.isDown && !hasLanded && !hasBumped) {
    bird.setVelocityY(-160);
  }

  //let's make sure that it stops moving right if it bumps into a column
  if (!hasLanded || !hasBumped) {
  bird.body.velocity.x = 50;
  }

  if (hasLanded || hasBumped || !isGameStarted) {
  bird.body.velocity.x = 0;
  }

  // WE CREATE THE START SCREEN
  //cursors.space.isDown = spacebar
  if (cursors.space.isDown && !isGameStarted) {
    isGameStarted = true;
  }

  // we make sure that the bird moves until the game starts
  if (!isGameStarted) {
    bird.setVelocityY(-160);
  }

  // Instructions for the player
  if (cursors.space.isDown && !isGameStarted) {
    isGameStarted = true;
    messageToPlayer.text =
      'Instructions: Press the "^" button to stay upright\nAnd don\'t hit the columns or ground';
  }

  if (hasLanded || hasBumped) {
    messageToPlayer.text = `Oh no! You crashed!`;
  }

  if (bird.x > 750) {
    bird.setVelocityY(40);
    messageToPlayer.text = `Congrats! You won!`;
  }
}