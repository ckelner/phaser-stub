Golemancer.states.play.prototype = {
  create: function() {
    Golemancer.core.game.physics.startSystem( Phaser.Physics.ARCADE );
    this.jumpStart = Golemancer.core.game.time.now;
  },
  render: function() {
    if( Golemancer.core.debug ) {
      // do some debugging
    }
  },
  update: function() {
    // calc the amount of time that has passed
    _jump = Golemancer.core.game.time.elapsedSince(this.jumpStart)
    if( (this.tickityTock + 1000) - _jump <= 0 ) {
      this.tickityTock = _jump;
    }
    this.performCollisions();
    if(Golemancer.core.game.input.activePointer.justPressed()) {
      Golemancer.core.game.state.start('gameover');
    }
  },
  performCollisions: function() {
    var groupOne = Golemancer.core.game.add.group();
    var groupTwo = Golemancer.core.game.add.group();
    Golemancer.core.game.physics.arcade.collide(groupOne,groupTwo,this.handleCollision);
  },
  handleCollision: function(spriteOne, spriteTwo) {
    // do some collision handling
  }
};
