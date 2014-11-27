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
      // @ckelner: maybe even for POC optimize/abstract this?
      /*
        workshop
      */
      // workshop "object"
      var wrkshp_geometry = new THREE.BoxGeometry(1,1,1);
      var wrkshp_texture = THREE.ImageUtils.loadTexture( 'assets/images/crate.gif' );
      wrkshp_texture.anisotropy = Golemancer.core.three.renderer.getMaxAnisotropy();
      var wrkshp_material = new THREE.MeshBasicMaterial({map: wrkshp_texture});
      var wrkshp_object = new THREE.Mesh(wrkshp_geometry, wrkshp_material);
      this.scene.add( wrkshp_object );
      // workshop text
      var wrkshp_text = "Workshop";
      var wrkshp_text3d = new THREE.TextGeometry( wrkshp_text, {
        size: 0.5,
        height: 0.05,
        curveSegments: 2,
        font: "helvetiker"
      });
      wrkshp_text3d.computeBoundingBox();
      var wrkshp_text_centerOffset = -0.5 * ( wrkshp_text3d.boundingBox.max.x - wrkshp_text3d.boundingBox.min.x );
      var wrkshp_textMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, overdraw: 0.5 } );
      var wrkshp_text = new THREE.Mesh( wrkshp_text3d, wrkshp_textMaterial );
      wrkshp_text.position.x = wrkshp_text_centerOffset;
      wrkshp_text.position.y = 1.15;
      wrkshp_text.position.z = 0;
      wrkshp_text.rotation.x = 0;
      wrkshp_text.rotation.y = Math.PI * 2;
      this.scene.add( wrkshp_text );
      
      /*
        Library
      */
      // library "object"
      
      var lib_geometry = new THREE.BoxGeometry(1,1,1);
      var lib_texture = THREE.ImageUtils.loadTexture( 'assets/images/books.jpg' );
      lib_texture.anisotropy = Golemancer.core.three.renderer.getMaxAnisotropy();
      var lib_material = new THREE.MeshBasicMaterial({map: lib_texture});
      var lib_object = new THREE.Mesh(lib_geometry, lib_material);
      lib_object.position.x = -6;
      this.scene.add( lib_object );
      // library text
      var lib_text = "Library";
      var lib_text3d = new THREE.TextGeometry( lib_text, {
        size: 0.5,
        height: 0.05,
        curveSegments: 2,
        font: "helvetiker"
      });
      lib_text3d.computeBoundingBox();
      var lib_textMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, overdraw: 0.5 } );
      var lib_text = new THREE.Mesh( lib_text3d, lib_textMaterial );
      lib_text.position.x = -7;
      lib_text.position.y = 1.15;
      lib_text.position.z = 0;
      lib_text.rotation.x = 0;
      lib_text.rotation.z = 0;
      lib_text.rotation.y = (Math.PI * 2) + 0.45;
      this.scene.add( lib_text );

      /*
        Portal
      */
      // portal "object"
      
      var port_geometry = new THREE.BoxGeometry(1,1,1);
      var port_texture = THREE.ImageUtils.loadTexture( 'assets/images/portal.gif' );
      port_texture.anisotropy = Golemancer.core.three.renderer.getMaxAnisotropy();
      var port_material = new THREE.MeshBasicMaterial({map: port_texture});
      var port_object = new THREE.Mesh(port_geometry, port_material);
      port_object.position.x = 6;
      this.scene.add( port_object );
      // portal text
      var port_text = "Portal";
      var port_text3d = new THREE.TextGeometry( port_text, {
        size: 0.5,
        height: 0.05,
        curveSegments: 2,
        font: "helvetiker"
      });
      port_text3d.computeBoundingBox();
      var port_textMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, overdraw: 0.5 } );
      var port_text = new THREE.Mesh( port_text3d, port_textMaterial );
      port_text.position.x = 5;
      port_text.position.y = 1.15;
      port_text.position.z = 0;
      port_text.rotation.x = 0;
      port_text.rotation.z = 0;
      port_text.rotation.y = (Math.PI * 2) - 0.45;
      this.scene.add( port_text );

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
    break;
  }
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