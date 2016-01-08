var obj1 = (function() {
  return {
    a: fn1,
    b: fn2
  };

  function fn1() {

  }

  function fn2() {

  }
})();

var obj2 = (function(){
  return {
    a: fn3,
    b: fn4
  };
  var fn3 = function(){

  }
  var fn4 = function(){

  }

})();

//obj2.a();
