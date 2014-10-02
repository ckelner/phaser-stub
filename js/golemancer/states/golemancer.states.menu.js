Golemancer.states.menu.prototype = {
  create: function() {
    var style = {
      font: '16px Arial',
      fill: '#ffffff',
      align: 'center'
    };
    var instructionsText = Golemancer.game.add.text(
      Golemancer.game.world.centerX,
      600,
      'Click anywhere to play',
      style);
    instructionsText.anchor.setTo(0.5, 0.5);
  },
  update: function() {
    if(Golemancer.game.input.activePointer.justPressed()) {
      Golemancer.game.state.start('play');
    }
  }
};
