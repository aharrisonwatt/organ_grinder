var addKeyListeners = require('./util/key_listener'),
    React = require('react'),
    ReactDOM = require('react-dom'),
    OrganKey = require('./components/organ_key');

addKeyListeners();

$(function(){

  ReactDOM.render(
    <OrganKey noteName="C4"/>,
    document.getElementById('root')
  );

});
