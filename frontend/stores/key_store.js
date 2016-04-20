var Store = require('flux/utils').Store,
    dispatcher = require('../dispatcher/dispatcher');

var _keys = [];

var KeyStore = new Store(dispatcher);



module.exports = KeyStore;
