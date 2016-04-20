var addKeyListeners = require('./util/key_listener'),
    React = require('react'),
    ReactDOM = require('react-dom'),
    Organ = require('./components/organ');

addKeyListeners();

$(function(){

  ReactDOM.render(
    <Organ/>,
    document.getElementById('root')
  );

});
