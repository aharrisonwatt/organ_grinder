var React = require("react"),
    Track = require("../util/track"),
    KeyStore = require('../stores/key_store');

var Recorder = React.createClass({
  getInitialState: function() {
    return {
      isRecording: false,
      track: new Track()
    };
  },

  componentDidMount: function() {
    this.listener = KeyStore.addListener(this._handleChange);
  },

  _handleChange: function() {
    if(this.state.isRecording){
      this.state.track.addNotes(KeyStore.all());
    }
  },

  handleRecordButton: function() {
    event.preventDefault();

    var track = this.state.track;

    if (this.state.isRecording) {
      track.stopRecording();
      this.setState({isRecording: false});
    }else{
      track.startRecording();
      this.setState({isRecording: true});
    }
  },

  handlePlaybackButton: function() {
    event.preventDefault();

    this.state.track.play();
  },

  render: function() {
    var RecordButtonText = this.state.isRecording ?
      "Stop Recording" :
      "Start Recording";

    return (
      <div>
        <button onClick={this.handleRecordButton}>
          {RecordButtonText}
        </button>

        <button onClick={this.handlePlaybackButton}>
          Play Track
        </button>
      </div>
    );
  }
});

module.exports = Recorder;
