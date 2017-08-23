//IMPLEMENTATION FILE

//create board
//scoring
$(function(){
  console.log("connected");

    var Random=game.Random();
    var Calculate=game.Calculate();
    var Timer=game.Timer();
    var time;


    //testing for method files
    Random.hello();
    Calculate.hello();
    Timer.hello();

  //When "New Game" is clicked, display game, generate new random numbers
  $('#gameLink').click(function(e){
    $('#instructions').css('display', 'none');
    $('#newGame').css('visibility', 'visible');
    $('#solution').empty();
    Random.generation();
    //Resetting the timer
    clearInterval(time);
    seconds = 0;
    time = setInterval(Timer.timer, 1000);
    $('#timer').css('display', 'block');
    $('#timer-score').css('display', 'none');
  })

  //When "instructions" is clicked, display it and hide game
  $('#instructionsLink').click(function(){
    $('#instructions').css('display','block');
    $('#newGame').css('visibility', 'hidden');
  })

  //When hitting enter after inputting the solution, call the calculate function
  $('#expression').keypress(function(e){
    if(e.which==13) {
      $('#solution').empty();
      $('.expression').empty(); // !!!not getting to empty out
      var answer=$('input').val();
      //Pass input expression into calculate function
      Calculate.onSubmit(answer,Random.randNumbers);
      //GET timeArray from math.js to map and parse into seconds
      var timeArray = Calculate.timeArray;
      var timeArraySeconds = $.map(timeArray, Timer.timeInSeconds);
      console.log(timeArraySeconds);
      //Finding player's shortest amount of time
      var shortestTime = Math.min.apply(Math,timeArraySeconds);
      console.log(`Fastest Time: ${shortestTime}`);
      return false;
    }
  })
});
