/**
* Create functionality for core gameplay from game state "Play"
**/
Golemancer.core.create = function() {
  Golemancer.game.physics.startSystem( Phaser.Physics.ARCADE );
  this.jumpStart = Golemancer.game.time.now;
}
