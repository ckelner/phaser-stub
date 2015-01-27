Golemancer.core.dimension.determineAndShowContext = function() {
  switch( Golemancer.core.dimension.currentContext ) {
    case Golemancer.core.dimension.threeD:
      Golemancer.core.dimension.switchTo3d();
      break;
    case Golemancer.core.dimension.twoD:
      Golemancer.core.dimension.switchTo2d();
      break;
  }
};
Golemancer.core.dimension.switchTo3d = function() {
  // Hide 2d
  Golemancer.core.dimension.hide2dDom();
  Golemancer.core.dimension.show3dDom();
  Golemancer.core.dimension.setCurrentContext3d();
};
Golemancer.core.dimension.switchTo2d = function() {
  // Hide 3d
  Golemancer.core.dimension.hide3dDom();
  Golemancer.core.dimension.show2dDom();
  Golemancer.core.dimension.setCurrentContext2d();
};
// Hide the Phase 2d DOM element
Golemancer.core.dimension.hide2dDom = function() {
  var phaserDom = document.getElementById(Golemancer.canvasName);
  phaserDom.setAttribute("style","display:none");
};
// Show the Phase 2d DOM element
Golemancer.core.dimension.show2dDom = function() {
  var phaserDom = document.getElementById(Golemancer.canvasName);
  phaserDom.setAttribute("style","display:block");
};
// Hide the three.js 3d DOM element
Golemancer.core.dimension.hide3dDom = function() {
  var phaserDom = document.getElementById(Golemancer.core.three.domElIdVal);
  phaserDom.setAttribute("style","display:none");
};
// Show the three.js 3d DOM element
Golemancer.core.dimension.show3dDom = function() {
  var phaserDom = document.getElementById(Golemancer.core.three.domElIdVal);
  phaserDom.setAttribute("style","display:block");
};
Golemancer.core.dimension.setCurrentContext3d = function() {
  Golemancer.core.dimension.currentContext = Golemancer.core.dimension.threeD;
};
Golemancer.core.dimension.setCurrentContext2d = function() {
  Golemancer.core.dimension.currentContext = Golemancer.core.dimension.twoD;
};