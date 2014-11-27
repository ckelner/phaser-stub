// 3d namespace
Golemancer.core.three = {
  canvas: null,
  scene: null,
  camera: null,
  renderer: null,
  canvasDOM: null,
  domElIdVal: "3dContext",
  /*
    1 = workshop scene
  */
  whichScene: 1
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
// @ckelner: this is some crappy draw stuff for now...
/*
  Just POC placeholder shit
*/
Golemancer.core.three.render = function() {
  var draw = null;
  switch( this.whichScene ) {
    case 1: // "Menu"
      Golemancer.core.three.constructMenuScene();
    break;
  }
}
Golemancer.core.three.constructMenuScene = function() {
  /*
    workshop
  */
  // workshop "object"
  var wrkshp_object = Golemancer.core.three.menuSceneBuilder(
    1,
    1,
    1,
    0,
    'assets/images/crate.gif',
    "Workshop",
    0.5,
    0.05,
    -1.5,
    1.15,
    0,
    0,
    Math.PI * 2
  );
  this.scene.add( wrkshp_object );
  
  /*
    Library
  */
  // library "object"
  var lib_object = Golemancer.core.three.menuSceneBuilder(
    1,
    1,
    1,
    -6,
    'assets/images/books.jpg',
    "Library",
    0.5,
    0.05,
    -7,
    1.15,
    0,
    0,
    (Math.PI * 2) + 0.45
  );
  this.scene.add( lib_object );

  /*
    Portal
  */
  // portal "object"
  var port_object = Golemancer.core.three.menuSceneBuilder(
    1,
    1,
    1,
    6,
    'assets/images/portal.gif',
    "Portal",
    0.5,
    0.05,
    5,
    1.15,
    0,
    0,
    (Math.PI * 2) - 0.45
  );
  this.scene.add( port_object );

  // set camera position
  this.camera.position.z = 10;
  draw = function () {
    requestAnimationFrame(draw);
    wrkshp_object.rotation.x += 0.005;
    wrkshp_object.rotation.y += 0.005;
    lib_object.rotation.x += 0.005;
    lib_object.rotation.y += 0.005;
    port_object.rotation.x += 0.005;
    port_object.rotation.y += 0.005;
    Golemancer.core.three.renderer.render(Golemancer.core.three.scene, Golemancer.core.three.camera);
  };
  draw();
}
/*
  @ckelner: helper function to build alike menu options
*/
Golemancer.core.three.menuSceneBuilder = function(geoX,geoY,geoZ,objectXPos,tex,word,wordSize,wordHeight,xPos,yPos,zPos,xRot,yRot) {
  var geometry = new THREE.BoxGeometry(geoX,geoY,geoZ);
  var texture = THREE.ImageUtils.loadTexture( tex );
  texture.anisotropy = Golemancer.core.three.renderer.getMaxAnisotropy();
  var material = new THREE.MeshBasicMaterial({map: texture});
  var object = new THREE.Mesh(geometry, material);
  object.position.x = objectXPos;
  // text
  var text = word;
  var text3d = new THREE.TextGeometry( text, {
    size: wordSize,
    height: wordHeight,
    curveSegments: 2,
    font: "helvetiker"
  });
  text3d.computeBoundingBox();
  var testMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, overdraw: 0.5 } );
  var text = new THREE.Mesh( text3d, testMaterial );
  text.position.x = xPos;
  text.position.y = yPos;
  text.position.z = zPos;
  text.rotation.x = xRot;
  text.rotation.y = yRot;
  this.scene.add( text );
  return object;
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