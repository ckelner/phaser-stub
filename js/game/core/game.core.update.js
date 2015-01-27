/**
* Render functionality for core gameplay from game state "Play"
**/
GameName.core.update = function() {
  // calc the amount of time that has passed
  _jump = GameName.game.time.elapsedSince(this.jumpStart)
  if( (this.tickityTock + 1000) - _jump <= 0 ) {
    this.tickityTock = _jump;
  }
  GameName.core.collision.performCollisions();
  if(GameName.game.input.activePointer.justPressed()) {
    GameName.game.state.start('gameover');
  }
  GameName.core.dimension.determineAndShowContext();
}
