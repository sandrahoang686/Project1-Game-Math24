var Timer = (function(){

  var seconds = 0+'';
  var minutes = 0+'';

  function pad(n){
    return (n < 10) ? ("0" + n) : n;
  }

  return {
    hello: function(){
      console.log('hello from timer');
    },
    timer: function(){
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
    }
  }

})();
