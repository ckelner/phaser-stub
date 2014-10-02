// Instantiate the game namespace
var Golemancer = Golemancer || {};
/**
* Core functionality to the game.  This can include but is not limited to
* global functions, global variables, helper functions, loading, preloading,
* unloading, etc.
**/
Golemancer.core = {
  game: null,
  debug: false,
  load: function(){
    Golemancer.core.isDebugMode();
    Golemancer.core.game = new Phaser.Game( window.innerWidth, window.innerHeight, Phaser.AUTO );
    // Game States
    Golemancer.core.game.state.add('boot', Golemancer.states.boot);
    Golemancer.core.game.state.add('preload', Golemancer.states.preload);
    Golemancer.core.game.state.add('menu', Golemancer.states.menu);
    Golemancer.core.game.state.add('play', Golemancer.states.play);
    Golemancer.core.game.state.add('gameover', Golemancer.states.gameover);
    Golemancer.core.game.state.start('boot');
  },
  isDebugMode: function() {
    var debug = Golemancer.core.getQueryParam('debug');
    if( debug === "true" || debug === true ) {
      Golemancer.core.debug = true;
    } else {
      Golemancer.core.debug = false;
    }
  },
  getQueryParam: function( query ) {
    query = query.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + query + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}
window.onload = Golemancer.core.load;
