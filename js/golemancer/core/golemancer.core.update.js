/**
* Render functionality for core gameplay from game state "Play"
**/
Golemancer.core.update = function() {
  // calc the amount of time that has passed
  _jump = Golemancer.game.time.elapsedSince(this.jumpStart)
  if( (this.tickityTock + 1000) - _jump <= 0 ) {
    this.tickityTock = _jump;
  }
  Golemancer.core.collision.performCollisions();
  if(Golemancer.game.input.activePointer.justPressed()) {
    Golemancer.game.state.start('gameover');
  }
}
