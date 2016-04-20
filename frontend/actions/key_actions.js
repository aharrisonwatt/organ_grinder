var dispatcher = require("../dispatcher/dispatcher");

var KeyActions = {
  keyPressed: function(note) {
    dispatcher.dispatch({
      actionType: "REGISTER_NOTE",
      note: note
    });
  },

  keyReleased: function(note) {
    dispatcher.dispatch({
      actionType: "UNREGISTER_NOTE",
      note: note
    });
  }
};

module.exports = KeyActions;
