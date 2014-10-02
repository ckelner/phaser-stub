// Boot state
Golemancer.states.boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/images/preloader.gif');
  },
  create: function() {
    Golemancer.core.game.input.maxPointers = 1;
    Golemancer.core.game.state.start('preload');
  }
}
