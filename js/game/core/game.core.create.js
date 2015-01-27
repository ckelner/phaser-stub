/**
* Create functionality for core gameplay for game state "Play"
**/
GameName.core.create = function() {
  GameName.game.physics.startSystem( Phaser.Physics.ARCADE );
  GameName.core.three.create();
  // Place holder for 2d shits...
  var style = {
    font: '65px Arial',
    fill: '#ffffff',
    align: 'center'
  };
  var twoDText = GameName.game.add.text(
    GameName.game.world.centerX,
    150,
    'TWO DIMENSIONS!!!',
    style);
  twoDText.anchor.setTo(0.5, 0.5);
  // set context to 3d to start
  GameName.core.dimension.setCurrentContext3d();
}
