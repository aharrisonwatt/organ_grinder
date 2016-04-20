var Store = require('flux/utils').Store,
    dispatcher = require('../dispatcher/dispatcher');

var _keys = [];
var KeyStore = new Store(dispatcher);

// API
KeyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "REGISTER_NOTE":
      addNote(payload.noteName);
      this.__emitChange();
      break;
    case "UNREGISTER_NOTE":
      removeNote(payload.noteName);
      this.__emitChange();
      break;
  }
};

KeyStore.all = function () {
  return _keys.slice();
};

KeyStore.isPlaying = function (noteName) {
  return _keys.indexOf(noteName) !== -1;
};

// private methods
function addNote(noteName) {
  _keys.push(noteName);
}

function removeNote(noteName) {
  _keys.splice(_keys.indexOf(noteName), 1);
}

module.exports = KeyStore;
