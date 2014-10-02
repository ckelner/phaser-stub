Golemancer.states.menu.prototype = {
  create: function() {
    var instructionsText = Golemancer.core.game.add.text(Golemancer.core.game.world.centerX, 600,
      'Click anywhere to play', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    instructionsText.anchor.setTo(0.5, 0.5);
  },
  update: function() {
    if(Golemancer.core.game.input.activePointer.justPressed()) {
      Golemancer.core.game.state.start('play');
    }
  }
};
