Golemancer.states.play.prototype = {
  create: function() {
    Golemancer.game.physics.startSystem( Phaser.Physics.ARCADE );
    this.jumpStart = Golemancer.game.time.now;
  },
  render: function() {
    if( Golemancer.debug ) {
      // do some debugging
    }
  },
  update: function() {
    // calc the amount of time that has passed
    _jump = Golemancer.game.time.elapsedSince(this.jumpStart)
    if( (this.tickityTock + 1000) - _jump <= 0 ) {
      this.tickityTock = _jump;
    }
    this.performCollisions();
    if(Golemancer.game.input.activePointer.justPressed()) {
      Golemancer.game.state.start('gameover');
    }
  },
  performCollisions: function() {
    // Examples
    // TOOD: Replace
    var groupOne = Golemancer.game.add.group();
    var groupTwo = Golemancer.game.add.group();
    Golemancer.game.physics.arcade.collide(groupOne,groupTwo,this.handleCollision);
  },
  handleCollision: function(spriteOne, spriteTwo) {
    // do some collision handling
  }
};
