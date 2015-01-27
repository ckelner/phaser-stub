GameName.states.gameover.prototype = {
  create: function () {
    var style = {
      font: '65px Arial',
      fill: '#ffffff',
      align: 'center'
    };
    this.titleText = GameName.game.add.text(
      GameName.game.world.centerX,
      150,
      'Game Over!',
      style
    );
    this.titleText.anchor.setTo(0.5, 0.5);

    style = {
      font: '32px Arial',
      fill: '#ffffff',
      align: 'center'
    };
    this.congratsText = GameName.game.add.text(
      GameName.game.world.centerX,
      225,
      'You Win!',
      style
    );
    this.congratsText.anchor.setTo(0.5, 0.5);

    style = {
      font: '16px Arial',
      fill: '#ffffff',
      align: 'center'
    };
    this.instructionText = GameName.game.add.text(
      GameName.game.world.centerX,
      275,
      'Click To Play Again',
      style);
    this.instructionText.anchor.setTo(0.5, 0.5);
  },
  update: function () {
    if(GameName.game.input.activePointer.justPressed()) {
      GameName.game.state.start('play');
    }
  }
};
