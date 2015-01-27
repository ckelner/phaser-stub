// Instantiate the namespace
GameName.core = {};
/**
* Core game logic from game state "Play"
**/
// Collision handling, see: golemancer.core.collision.js
GameName.core.collision = {};
// 2d/3d Context handling, see: golemancer.core.dimension.js
GameName.core.dimension = {
  // keep track of 2d/3d context switching
  threeD: "3d",
  twoD: "2d",
  currentContext: null
};