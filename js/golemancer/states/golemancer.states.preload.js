Golemancer.states.preload.prototype = {
  preload: function() {
    // loading bar
    this.asset = Golemancer.game.add.sprite(this.HEIGHT,this.WIDTH, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);
    // run onLoadComplete after assets get loaded
    Golemancer.game.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    Golemancer.game.load.setPreloadSprite(this.asset);
    // load assets
    Golemancer.game.load.image('1x1', 'assets/images/1x1.png');
  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      Golemancer.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};
