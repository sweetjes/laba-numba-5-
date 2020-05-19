var music = [first, second, third];
var Player = {
  track: 'song.mp3',
  status: 'pause',
  selectedTrack : 0,
  display: function() {
    if (music.length > 0 ) {
      return 'Track: ' + music[this.selectedTrack] + ' Status: ' + this.status;
    } else {
      return 'No tracks:(';
    }

  },
  play: function() {
    this.status = 'play';
  },
  pause: function() {
    this.status = 'pause';
  },
  next: function() {
    if(this.selectedTrack < music.length - 1) {
      this.selectedTrack++; 
    } else {
      this.selectedTrack = 0;
    }
  },
  prev: function() {
    if(this.selectedTrack > 0) {
      this.selectedTrack--;
    } else {
      this.selectedTrack = music.length - 1;
    }
  }
};
 