// 3d namespace
Golemancer.core.three = {
  canvas: null,
  scene: null,
  camera: null,
  renderer: null,
  canvasDOM: null,
  domElIdVal: "3dContext"
};
// create 3d context
Golemancer.core.three.create = function() {
  // find old 3d dom el and delete that ish
  Golemancer.core.three.delete3dDom();
  // shitty example code
  this.scene = new THREE.Scene();
  this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  this.renderer = new THREE.WebGLRenderer();
  this.renderer.setSize(window.innerWidth, window.innerHeight);
  this.renderer.domElement.id = Golemancer.core.three.domElIdVal;
  this.canvasDOM = document.body.appendChild(this.renderer.domElement);
  Golemancer.core.three.render();
}
// draw some shits.
// @ckelner: this is some crappy draw stuff for now... icing on the cake for later
Golemancer.core.three.render = function() {
  var geometry = new THREE.BoxGeometry(1,1,1);
  var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
  var cube = new THREE.Mesh(geometry, material);
  this.scene.add(cube);
  this.camera.position.z = 5;
  var draw = function () {
    requestAnimationFrame(draw);
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    Golemancer.core.three.renderer.render(Golemancer.core.three.scene, Golemancer.core.three.camera);
  };
  draw();
}
/**
  @ckelner: A better way of handling this might be to figure out how to just simply
  reuse the existing context?  Probably pretty easy by just doing an easy check
  to see if the class 'Golemancer.core.three' properties are populated already;
  Though there may be some good reasons to toss it out and start over...
**/
// deletes old 3d dom element (otherwise memoryleaks!)
Golemancer.core.three.delete3dDom = function() {
  var threeEl = document.getElementById( Golemancer.core.three.domElIdVal );
  // if it already exists...
  if( threeEl ) {
    document.body.removeChild( threeEl );
  }
}