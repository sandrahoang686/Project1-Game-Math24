//METHOD FILE
"use strict";

//var Calculate=game.Calculate();

var Random = (function(){
  var one, two, three, four;
  return {
    self: this, // represents the window
    randNumbers: [],
    hello: function(){
      console.log('hello from random');
    },
    generation: function(){
      var randNumbers = self.Random.randNumbers;

      one=Math.floor(Math.random()*(10-1)+1);
      two=Math.floor(Math.random()*(10-1)+1);
      three=Math.floor(Math.random()*(10-1)+1);
      four=Math.floor(Math.random()*(10-1)+1);
      randNumbers.push(one,two,three,four);
      $('#top-num').html(`${one}`);
      $('#right-num').html(`${two}`);
      $('#bottom-num').html(`${three}`);
      $('#left-num').html(`${four}`);
    }

  }

})();
