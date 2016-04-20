var dispatcher = require("../dispatcher/dispatcher");

var KeyActions = {
  keyPressed: function(noteName) {
    dispatcher.dispatch({
      actionType: "REGISTER_NOTE",
      noteName: noteName
    });
  },

  keyReleased: function(noteName) {
    dispatcher.dispatch({
      actionType: "UNREGISTER_NOTE",
      noteName: noteName
    });
  }
};

module.exports = KeyActions;
