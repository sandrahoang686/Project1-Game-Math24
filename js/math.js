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
      }
      if (allNums === true) {
        console.log(eval(expr));
      }
      else {
        alert('Are you using all 4 of the right numbers!?')
      }



      // var allNums = numExp.includes('3');
      // if (allNums === true) {
      //   console.log(eval(numExp));
      // }
      // else {
      //   alert('Are you using all 4 of the right numbers!?')
      // }

    }
  }

})();
