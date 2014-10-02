Golemancer.states.preload.prototype = {
  preload: function() {
    // TODO: Awesome jeef arts
    var style = {
      font: '24px Arial',
      fill: '#ffffff',
      align: 'center'
    };
    var loadText = Golemancer.game.add.text(
      Golemancer.game.world.centerX,
      150,
      'Loading...',
      style);
    loadText.anchor.setTo(0.5, 0.5);
    // loading bar
    this.asset = Golemancer.game.add.sprite(Golemancer.width/2, 200, 'preloader');
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
    if(this.ready && !this.start) {
      this.start = true;
      setTimeout(this.startGame, 1000);
    }
  },
  // a little hackery so the loading screen doesn't
  // flash by in less than the blink of an eye
  startGame: function() {
    Golemancer.game.state.start('menu');
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};
