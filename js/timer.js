var seconds = 0;
var minutes = 0;

var Timer = (function(){

  function pad(n){
    return (n < 10) ? ("0" + n) : n;
  }

  return {
    hello: function(){
      console.log('hello from timer');
    },
    timer: function(){
      //clearInterval(time);
      if (seconds < 60){
        seconds++;
        if(seconds===60){
          seconds=0;
          minutes++;
          minutes=pad(minutes);
        }
        seconds=pad(seconds);
        $('#timer').html(`${minutes}:${seconds}`);
      }
    },
    timeInSeconds: function(key){
      console.log('hi timeInSeconds');
      var totalSeconds=key.split(/:/);
      return parseInt(totalSeconds[0])*60+parseInt(totalSeconds[1]);
    }
  }

})();
