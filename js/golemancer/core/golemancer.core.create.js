/**
* Create functionality for core gameplay from game state "Play"
**/
Golemancer.core.create = function() {
  Golemancer.game.physics.startSystem( Phaser.Physics.ARCADE );
  Golemancer.core.three.create();
  // Place holder for 2d shits...
  var style = {
    font: '65px Arial',
    fill: '#ffffff',
    align: 'center'
  };
  var twoDText = Golemancer.game.add.text(
    Golemancer.game.world.centerX,
    150,
    'TWO DIMENSIONS!!!',
    style);
  twoDText.anchor.setTo(0.5, 0.5);
}
