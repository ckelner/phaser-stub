// Boot state
GameName.states.boot.prototype = {
  preload: function() {
    GameName.game.load.image('preloader', 'assets/images/preloader.gif');
  },
  create: function() {
    GameName.game.input.maxPointers = 1;
    GameName.game.state.start('preload');
  }
}
