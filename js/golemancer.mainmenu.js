Golemancer.mainmenu = {
  geometry: null,
  material: null,
  cube: null,
  scene: null,
  load: function(){
    this.scene = new THREE.Scene();
    this.geometry = new THREE.BoxGeometry(1,1,1);
    this.material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.cube);
    Golemancer.threejs.camera.position.z = 5;
    this.render();
  },
  render: function(){
    // All references must be fully qualified reference for callback
    // cannot be scoped 'this' ('this' will be 'Window')
    requestAnimationFrame(Golemancer.mainmenu.render);
    Golemancer.mainmenu.cube.rotation.x += 0.1;
    Golemancer.mainmenu.cube.rotation.y += 0.1;
    Golemancer.threejs.renderer.render(Golemancer.mainmenu.scene, Golemancer.threejs.camera);
  }
}
