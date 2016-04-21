var KeyActions = require('../actions/key_actions'),
    KEYMAP = require('../constants/key_map');

var _pressState = {};

var addKeyListeners = function() {
  var $document = $(document);

  $document.keydown(function(event){
    if (!_pressState[event.keyCode] && KEYMAP[event.keyCode]){
      KeyActions.keyPressed([KEYMAP[event.keyCode]]);

      _pressState[event.keyCode] = true;
    }
  });

  $document.keyup(function(event){
    if (_pressState[event.keyCode]){
      KeyActions.keyReleased([KEYMAP[event.keyCode]]);

      _pressState[event.keyCode] = false;
    }
  });
};

module.exports = addKeyListeners;
