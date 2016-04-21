var Store = require('flux/utils').Store,
    dispatcher = require('../dispatcher/dispatcher');

var _keys = [];
var KeyStore = new Store(dispatcher);

// API
KeyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "REGISTER_NOTES":
      addNotes(payload.notes);
      this.__emitChange();
      break;
    case "UNREGISTER_NOTES":
      removeNotes(payload.notes);
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
function addNotes(notes) {
  _keys = _keys.concat(notes);
}

function removeNotes(notes) {
  notes.forEach(function(note){
    _keys.splice(_keys.indexOf(note), 1);
  });
}

module.exports = KeyStore;
