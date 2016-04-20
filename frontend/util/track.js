function Track(options){
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

module.exports = Track;
