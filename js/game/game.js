/*
  NOTES:
    - Worth noting that the scope of "this" can be used mostly everywhere within
      the codebase to refer to the "GameName" object, however it becomes tricky
      once callbacks and intervals get introduced.  Therefore it is a best
      practice to call the "GameName" object directly to avoid any ambiguity.
*/
// Instantiate the game namespace
// @ckelner: This was originally the name of the game, but since I OSS this, I've
// replaced it with a generic "GameName" everywhere
var GameName = GameName || {};
/**
* Core functionality to the game.  This can include but is not limited to
* global functions, global variables, helper functions, loading, preloading,
* unloading, etc.
**/
GameName = {
  game: null,
  debug: false,
  canvasName: "phaser",
  canvasDOM: null,
  width: window.innerWidth,
  height: window.innerHeight,
  load: function(){
    this.isDebugMode();
    this.canvasDOM = document.getElementById( this.canvasName );
    this.game = new Phaser.Game( this.width, this.height, Phaser.AUTO, this.canvasName );
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
function loadGame(){
  GameName.load();
}
window.onload = loadGame;
