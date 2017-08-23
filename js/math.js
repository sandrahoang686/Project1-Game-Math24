// METHOD FILE

var Calculate = (function(){
  return {
    hello: function(){
      console.log('hello from math');
    },
    timeArray: [],
    onSubmit: function(answer, randNumbers) {
      var finishTime;
      var expr=answer;
      var array=randNumbers;
      console.log('numExp', expr);

      //To make sure all numbers on the card are used
      for (var i=0; i<array.length; i++){
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
        $('form').append(`<div id="solution"><h3>= ${solution}</h3></div>`)
        if(solution !== 24){
          $('#solution').append("<h3>That doesn't make 24...</h3>");
        }
        else { //When input is right, find time finished and hide timer!
          $('#solution').append("<h3>Woot Woot, nice job!!!");
          $('#timer').css('display', 'none');
          finishTime=$('#timer').html();
          $('#finishedTime').html(`${finishTime}`);
          $('#timer-score').css('display', 'block');
          //Push time finished to timeArray
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
