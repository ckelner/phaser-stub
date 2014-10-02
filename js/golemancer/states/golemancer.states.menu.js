Golemancer.states.menu.prototype = {
  create: function() {
    // TODO: Awesome jeef arts
    var style = {
      font: '65px Arial',
      fill: '#ffffff',
      align: 'center'
    };
    var titleText = Golemancer.game.add.text(
      Golemancer.game.world.centerX,
      150,
      'GOLEMANCER',
      style);
    titleText.anchor.setTo(0.5, 0.5);
    var style = {
      font: '16px Arial',
      fill: '#ffffff',
      align: 'center'
    };
    var instructionsText = Golemancer.game.add.text(
      Golemancer.game.world.centerX,
      250,
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
