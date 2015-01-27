/**
* All possible game states.
* Each state is implemented in its own namespace.
**/
GameName.states = {
  boot: function() {
    /* see game.state.boot.js */
  },
  preload: function() {
    /* see game.state.preload.js */
    this.ready = false;
    this.asset = null;
    this.start = false;
  },
  menu: function() {
    /* see game.state.menu.js */
  },
  play: function() {
    /* see game.state.play.js */
    this.jumpStart = null;
    this.tickityTock = 0;
  },
  gameover: function() {
    /* see game.stat.gameover.js */
  }
}
