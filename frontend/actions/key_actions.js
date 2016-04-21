var dispatcher = require("../dispatcher/dispatcher");

var KeyActions = {
  keyPressed: function(notes) {
    dispatcher.dispatch({
      actionType: "REGISTER_NOTES",
      notes: notes
    });
  },

  keyReleased: function(notes) {
    dispatcher.dispatch({
      actionType: "UNREGISTER_NOTES",
      notes: notes
    });
  }
};

module.exports = KeyActions;
