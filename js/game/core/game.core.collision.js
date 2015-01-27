GameName.core.collision.performCollisions = function() {
  // Examples
  // TOOD: Replace
  var groupOne = GameName.game.add.group();
  var groupTwo = GameName.game.add.group();
  GameName.game.physics.arcade.collide(groupOne,groupTwo,this.handleCollision);
};
GameName.core.collision.handleCollision = function(spriteOne, spriteTwo) {
  // do some collision handling
};