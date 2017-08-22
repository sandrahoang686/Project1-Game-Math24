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


  $('#gameLink').click(function(e){
    $('#instructions').css('display', 'none');
    $('#newGame').css('visibility', 'visible');
    $('#solution').empty();
    Random.generation();
    clearInterval(time);
    seconds = 0;
    time = setInterval(Timer.timer, 1000);
  })

  $('#instructionsLink').click(function(){
    $('#instructions').css('display','block');
    $('#newGame').css('visibility', 'hidden');
  })

  $('#expression').keypress(function(e){
    if(e.which==13) {
      $('#solution').empty();
      $('.expression').empty(); // !!!not getting to empty out
      var answer=$('input').val();
      Calculate.onSubmit(answer,Random.randNumbers);
      return false;
    }
  })
});
