/*
  NOTES:
    - This is a shell for the state only.  Most if all logic should not be
      implemented here.  Rather look at "js/game/core/" for the
      "game.core.<function>.js" files.  These should map to the Phaser
      game functions.
*/
GameName.states.play.prototype = {
  create: function() {
    GameName.core.create(this);
  },
  render: function() {
    GameName.core.render(this);
  },
  update: function() {
    GameName.core.update(this);
  }
};
