// Instantiate the game namespace
var Golemancer = Golemancer || {};
/**
* Core functionality to the game.  This can include but is not limited to
* global functions, global variables, helper functions, loading, preloading,
* unloading, etc.
**/
Golemancer.core = {
  load: function(){
    // setup out Threejs environment
    Golemancer.threejs.setupThreeJs();
    Golemancer.mainmenu.load();
  }
}

window.onload = Golemancer.core.load;
