// 3d namespace
Golemancer.core.three = {
  canvas: null,
  scene: null,
  camera: null,
  renderer: null,
  canvasDOM: null
};
// create 3d context
Golemancer.core.three.create = function() {
  // shitty example code
  this.scene = new THREE.Scene();
  this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  this.renderer = new THREE.WebGLRenderer();
  this.renderer.setSize(window.innerWidth, window.innerHeight);
  this.canvasDOM = document.body.appendChild(this.renderer.domElement);

  var geometry = new THREE.BoxGeometry(1,1,1);
  var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
  var cube = new THREE.Mesh(geometry, material);
  this.scene.add(cube);
  this.camera.position.z = 5;
  var render = function () {
    requestAnimationFrame(render);

    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;

    Golemancer.core.three.renderer.render(Golemancer.core.three.scene, Golemancer.core.three.camera);
  };
  render();
}