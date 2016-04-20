var React = require('react'),
    KeyStore = require('../stores/key_store'),
    Note = require('../util/note'),
    TONES = require('../constants/tones');

var OrganKey = React.createClass({
  componentDidMount: function() {
    var frequency = TONES[this.props.noteName];
    this.note = new Note(frequency);

    this.listener = KeyStore.addListener(this._handleChange);
  },

  _handleChange: function() {
    if (KeyStore.isPlaying(this.props.noteName)){
      this.note.start();
    }else{
      this.note.stop();
    }
  },

  render: function(){
    return(
      <div>Hello World I am a Note</div>
    );
  }

});

module.exports = OrganKey;
