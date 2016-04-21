var KeyActions = require('../actions/key_actions');

function Track(options = {}){
  this.name = options.name;
  this.roll = options.roll;
}

Track.prototype.startRecording = function(){
  this.roll = [];
  this.startTime = new Date().getTime();
};

Track.prototype.addNotes = function(notes){
  var timeSlice = (new Date().getTime() - this.startTime);

  this.roll.push({
    timeSlice: timeSlice,
    notes: notes
  });
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

Track.prototype.play = function () {
  if (this.interval) {
    return;
  }

  var playbackStartTime = new Date().getTime();
  var currentRollIdx = 0;
  var previousNotes = [];

  var callback = function() {
    if (currentRollIdx < this.roll.length) {
      var elapsedTime = (new Date().getTime() - playbackStartTime);
      var currentNoteStartTime = this.roll[currentRollIdx].timeSlice;
      var currentNotes = this.roll[currentRollIdx].notes;

      if (elapsedTime > currentNoteStartTime) {
        KeyActions.keyReleased(previousNotes);
        KeyActions.keyPressed(currentNotes);
        previousNotes = currentNotes;
        currentRollIdx++;
      }
    }else{
      this.stopPlayback();
    }
  }


  this.interval = setInterval(callback.bind(this), 10);
};

Track.prototype.stopPlayback = function () {
  clearInterval(this.interval);
  delete this.interval;
};

module.exports = Track;
