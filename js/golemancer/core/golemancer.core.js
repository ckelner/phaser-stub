// Instantiate the namespace
Golemancer.core = {};
/**
* Core game logic from game state "Play"
**/
Golemancer.core.performCollisions = function() {
  // Examples
  // TOOD: Replace
  var groupOne = Golemancer.game.add.group();
  var groupTwo = Golemancer.game.add.group();
  Golemancer.game.physics.arcade.collide(groupOne,groupTwo,this.handleCollision);
};
Golemancer.core.handleCollision = function(spriteOne, spriteTwo) {
  // do some collision handling
};
