GameName.states.menu.prototype = {
  create: function() {
    // TODO: Awesome arts
    // TODO: @ckelner => Maybe abstract this out to some seperate methods
    var style = {
      font: '65px Arial',
      fill: '#ffffff',
      align: 'center'
    };
    var titleText = GameName.game.add.text(
      GameName.game.world.centerX,
      150,
      'GOLEMANCER',
      style);
    titleText.anchor.setTo(0.5, 0.5);
    var style = {
      font: '16px Arial',
      fill: '#ffffff',
      align: 'center'
    };
    var instructionsText = GameName.game.add.text(
      GameName.game.world.centerX,
      250,
      'Click anywhere to play',
      style);
    instructionsText.anchor.setTo(0.5, 0.5);
  },
  update: function() {
    if(GameName.game.input.activePointer.justPressed()) {
      GameName.game.state.start('play');
    }
  }
};
