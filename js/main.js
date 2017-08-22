//IMPLEMENTATION FILE

//create board
//scoring
$(function(){
  console.log("connected");

  var Random=game.Random();
  var Calculate=game.Calculate();

  //testing for method files
  Random.hello();
  Random.generation();
  Calculate.hello();

  $('#expression').keypress(function(e){
    if(e.which==13) {
      $('.expression').empty(); // !!!not getting to empty out
      var answer=$('input').val();
      Calculate.onSubmit(answer,Random.randNumbers);
      return false;
    }
  })
});
