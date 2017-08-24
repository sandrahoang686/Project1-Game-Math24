//IMPLEMENTATION FILE

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

    var cardAnimation = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
  //When "New Game" is clicked, display game, generate new random numbers
  $('#gameLink').click(function(e){
    $('#instructions').css('display', 'none');
    $('#about').css('display','none');
    $('#newGame').css('visibility', 'visible');
    $('#results-num').css('display', 'none');
    $('#results-saying').css('display', 'none');
    $('#solution').empty();
    //animation in working
    $('#card').addClass('Stretch');
    $('#card').one(cardAnimation, function(e){
      $('#card').removeClass('Stretch');
    });
    //Generate random numbers on card
    Random.generation();
    //Resetting the timer
    clearInterval(time);
    seconds = 0;
    time = setInterval(Timer.timer, 1000);
    $('#timer').css('display', 'block');
    $('#timer-score').css('display', 'none');
  })

  //When "instructions" is clicked, display it and hide game and about div
  $('#instructionsLink').click(function(){
    $('#instructions').css('display','block');
    $('#about').css('display','none');
    $('#newGame').css('visibility', 'hidden');
  })

  //When "about" is clicked, display it and hide game and instructions div
  $('#aboutLink').click(function(){
    $('#about').css('display', 'block');
    $('#instructions').css('display', 'none');
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
      if(timeArraySeconds.length>1){
        $('#fastestTime').html(`Your shortest time is... ${shortestTime}`);
        $('#fastestTime').css('display','block');
      }
      return false;
    }
  })
});
