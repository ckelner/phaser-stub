/**
* Render functionality for core gameplay from game state "Play"
**/
Golemancer.core.render = function() {
  if( Golemancer.debug ) {
    // do some debugging
  }
  // Hide 2d
  Golemancer.core.hide2dDom();
}
// Hide the Phase 2d DOM element
Golemancer.core.hide2dDom = function() {
  // TODO: @ckelner => fix to not be hardcoded
  var phaserDom = document.getElementById(Golemancer.canvasName);
  phaserDom.setAttribute("style","display:none");
}
