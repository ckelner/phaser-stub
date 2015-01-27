GameName.core.dimension.determineAndShowContext = function() {
  switch( GameName.core.dimension.currentContext ) {
    case GameName.core.dimension.threeD:
      GameName.core.dimension.switchTo3d();
      break;
    case GameName.core.dimension.twoD:
      GameName.core.dimension.switchTo2d();
      break;
  }
};
GameName.core.dimension.switchTo3d = function() {
  // Hide 2d
  GameName.core.dimension.hide2dDom();
  GameName.core.dimension.show3dDom();
  GameName.core.dimension.setCurrentContext3d();
};
GameName.core.dimension.switchTo2d = function() {
  // Hide 3d
  GameName.core.dimension.hide3dDom();
  GameName.core.dimension.show2dDom();
  GameName.core.dimension.setCurrentContext2d();
};
// Hide the Phase 2d DOM element
GameName.core.dimension.hide2dDom = function() {
  var phaserDom = document.getElementById(GameName.canvasName);
  phaserDom.setAttribute("style","display:none");
};
// Show the Phase 2d DOM element
GameName.core.dimension.show2dDom = function() {
  var phaserDom = document.getElementById(GameName.canvasName);
  phaserDom.setAttribute("style","display:block");
};
// Hide the three.js 3d DOM element
GameName.core.dimension.hide3dDom = function() {
  var phaserDom = document.getElementById(GameName.core.three.domElIdVal);
  phaserDom.setAttribute("style","display:none");
};
// Show the three.js 3d DOM element
GameName.core.dimension.show3dDom = function() {
  var phaserDom = document.getElementById(GameName.core.three.domElIdVal);
  phaserDom.setAttribute("style","display:block");
};
GameName.core.dimension.setCurrentContext3d = function() {
  GameName.core.dimension.currentContext = GameName.core.dimension.threeD;
};
GameName.core.dimension.setCurrentContext2d = function() {
  GameName.core.dimension.currentContext = GameName.core.dimension.twoD;
};