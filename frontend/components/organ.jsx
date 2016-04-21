var React = require('react'),
    OrganKey = require('./organ_key'),
    TONES = require('../constants/tones'),
    Recorder = require('./recorder');

var Organ = React.createClass({

  render: function(){
    var organKeys = Object.keys(TONES).map(function(noteName){
      return <OrganKey key={noteName} noteName={noteName}/>;
    });

    return (
      <div>
        {organKeys}
        <Recorder/>
      </div>
    );
  }
});

module.exports = Organ;
