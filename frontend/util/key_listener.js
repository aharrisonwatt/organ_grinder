var KeyActions = require('../actions/key_actions'),
    KEYMAP = require('../constants/key_map');

var addKeyListeners = function() {
  var $document = $(document);

  $document.on('keyup', function(event){
    // KeyActions.releaseKey(KEYMAP[event.keyCode]);
    console.log(KEYMAP[event.keyCode]);
  });

  $document.on('keydown', function(event){
    // KeyActions.pressKey(KEYMAP[event.keyCode]);
    console.log(KEYMAP[event.keyCode]);
  });
};

module.exports = addKeyListeners;
