/*
  NOTES:
    - Worth noting that the scope of "this" can be used mostly everywhere within
      the codebase to refer to the "Golemancer" object, however it becomes tricky
      once callbacks and intervals get introduced.  Therefore it is a best
      practice to call the "Golemancer" object directly to avoid any ambiguity.
*/
// Instantiate the namespace
var Golemancer = Golemancer || {};
/**
* Core functionality to the game.  This can include but is not limited to
* global functions, global variables, helper functions, loading, preloading,
* unloading, etc.
**/
Golemancer = {
  game: null,
  debug: false,
  load: function(){
    this.isDebugMode();
    this.game = new Phaser.Game( window.innerWidth, window.innerHeight, Phaser.AUTO );
    // Game States
    this.game.state.add('boot', this.states.boot);
    this.game.state.add('preload', this.states.preload);
    this.game.state.add('menu', this.states.menu);
    this.game.state.add('play', this.states.play);
    this.game.state.add('gameover', this.states.gameover);
    this.game.state.start('boot');
  },
  isDebugMode: function() {
    var debug = this.getQueryParam('debug');
    if( debug === "true" || debug === true ) {
      this.debug = true;
    } else {
      this.debug = false;
    }
  },
  getQueryParam: function( query ) {
    query = query.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + query + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}
// little hacky, but gets around some scope and loading issues
function loadGolemancer(){
  Golemancer.load();
}
window.onload = loadGolemancer;
