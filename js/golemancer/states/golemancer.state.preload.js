Golemancer.states.preload.prototype = {
  preload: function() {
    // loading bar
    this.asset = this.add.sprite(this.HEIGHT,this.WIDTH, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);
    // run onLoadComplete after assets get loaded
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    // load assets
    this.load.image('1x1', 'assets/images/1x1.png');
  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      Golemancer.core.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};
