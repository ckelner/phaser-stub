// Boot state
Golemancer.states.boot.prototype = {
  preload: function() {
    Golemancer.game.load.image('preloader', 'assets/images/preloader.gif');
  },
  create: function() {
    Golemancer.game.input.maxPointers = 1;
    Golemancer.game.state.start('preload');
  }
}
