var testModule = (function() {
  var count = 0;
  var myPrivateVar = "private";
  return {
    myPublicVar: "public",
    increaseCount: function() {
      return ++count;
    },
    reset: function() {
      count = 0;
      console.log('count reseted');
    }
  }
})();

console.log(testModule.increaseCount());
console.log(testModule.increaseCount());
testModule.reset();
console.log(testModule.myPrivateVar);
console.log(testModule.myPublicVar);


var MODULE = (function() {
  var my = {},
    privateVariable = 1;

  function privateMethod() {
    // ...
  }

  my.moduleProperty = 1;
  my.moduleMethod = function() {
    // ...
  };

  return my;
}());
var a;
(function(my) {

  my.anotherMethod = function() {
    // added method...
  };

  return my;
}(MODULE));

(function(my) {
  my.hello = 1;
  return my;
}(a || {}))
