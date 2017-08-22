// METHOD FILE

var Calculate = (function(){
  return {
    hello: function(){
      console.log('hello from math');
    },
    onSubmit: function(answer, randNumbers) {
      var expr=answer;
      var array=randNumbers;
      console.log('numExp', expr);

      for (var i=0; i<array.length; i++){
        var currentNum=array[i];
        var allNums = expr.includes(currentNum);
        var cat;
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
        else {
          $('#solution').append("<h3>Woot Woot, nice job!!!");
        }
      }
      else {
        alert('Are you using all 4 of the right numbers!?')
      }
    }
  }

})();
