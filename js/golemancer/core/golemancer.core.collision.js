Golemancer.core.collision.performCollisions = function() {
  // Examples
  // TOOD: Replace
  var groupOne = Golemancer.game.add.group();
  var groupTwo = Golemancer.game.add.group();
  Golemancer.game.physics.arcade.collide(groupOne,groupTwo,this.handleCollision);
};
Golemancer.core.collision.handleCollision = function(spriteOne, spriteTwo) {
  // do some collision handling
};