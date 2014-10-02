/*
  NOTES:
    - This is a shell for the state only.  Most if all logic should not be
      implemented here.  Rather look at "js/golemancer/core/" for the
      "golemancer.core.<function>.js" files.  These should map to the Phaser
      game functions.
*/
Golemancer.states.play.prototype = {
  create: function() {
    Golemancer.core.create(this);
  },
  render: function() {
    Golemancer.core.render(this);
  },
  update: function() {
    Golemancer.core.update(this);
  }
};
