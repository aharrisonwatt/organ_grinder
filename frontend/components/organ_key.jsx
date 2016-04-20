var React = require('react'),
    KeyStore = require('../stores/key_store'),
    Note = require('../util/note'),
    TONES = require('../constants/tones');

var OrganKey = React.createClass({
  getInitialState: function() {
    return {isPlaying: false};
  },

  componentDidMount: function() {
    var frequency = TONES[this.props.noteName];
    this.note = new Note(frequency);

    this.listener = KeyStore.addListener(this._handleChange);
  },

  _handleChange: function() {
    if (KeyStore.isPlaying(this.props.noteName)){
      this.note.start();
      this.setState({isPlaying: true});
    }else{
      this.note.stop();
      this.setState({isPlaying: false});
    }
  },

  render: function(){
    var className = this.state.isPlaying ? "pressed" : "unpressed";

    return (
      <div className={className}>{this.props.noteName}</div>
    );
  }

});

module.exports = OrganKey;
