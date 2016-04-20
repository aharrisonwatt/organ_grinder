var Store = require('flux/utils').Store,
    dispatcher = require('../dispatcher/dispatcher');

var _keys = [];
var KeyStore = new Store(dispatcher);

// API
KeyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "REGISTER_NOTE":
      addNote(payload.note);
      break;
    case "UNREGISTER_NOTE":
      removeNote(payload.note);
      break;
  }
};

KeyStore.all = function () {
  return _keys.slice();
};

// private methods
function addNote(note) {
  _keys.push(note);
}

function removeNote(note) {
  _keys.splice(_keys.indexOf(note), 1);
}

module.exports = KeyStore;
