/**
* Core functionality to the game.  This can include but is not limited to
* global functions, global variables, helper functions, loading, preloading,
* unloading, etc.
**/
Golemancer.states = {
  boot: function() {
    /* see golemancer.state.boot.js */
  },
  preload: function() {
    /* see golemancer.state.preload.js */
    this.ready = false;
    this.asset = null;
  },
  menu: function() {
    /* see golemancer.state.menu.js */
  },
  play: function() {
    /* see golemancer.state.play.js */
    this.jumpStart = null;
    this.tickityTock = 0;
  },
  gameover: function() {
    /* see golemancer.stat.gameover.js */
  }
}
