// METHOD FILE

var Calculate = (function(){
  return {
    hello: function(){
      console.log('hello from math');
    },
    timeArray: [], //Array for finished times when player gets correct answer
    onSubmit: function(answer, randNumbers) {
      var finishTime;
      var expr=answer;
      var array=randNumbers;
      console.log('numExp', expr);

      //To make sure all numbers on the card are used
      for (var i=0; i<array.length-1; i++){
        var currentNum=array[i];
        var allNums = expr.includes(currentNum);
        var cat;
        //If the input express includes all numbers then it is true
        if (allNums === true) {
          cat=true;
        }
        else {
          cat=false;
        }
      };
      if (cat===true) {
        var solution=eval(expr);
        $('#results-num').css('display', 'block');
        $('#results-num').html(`${solution}`);
        if(solution !== 24){
          $('#results-saying').css('display', 'block');
          $('#results-saying').html("That doesn't make 24...");
        }
        else { //When input is right, find time finished and hide timer!
          $('#results-saying').css('display', 'block');
          $('#results-saying').html("Woot Woot, nice job!!!");
          $('#timer').css('display', 'none');
          finishTime=$('#timer').html();
          $('#finishedTime').html(`${finishTime}`);
          $('#timer-score').css('display', 'block');
          //Push finished time to timeArray
          Calculate.timeArray.push(finishTime);
        }
      }
      //When the user is not using the numbers
      else {
        alert('Are you using all 4 of the right numbers!?');
      }
      //console.log(Calculate.timeArray);
    }
  }

})();
