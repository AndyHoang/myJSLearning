// console.log(Object.getOwnPropertyNames(Function.prototype));

var tester = function(a, b, c) {
    console.log({
      this: this,
      a: a,
      b: b,
    });
  }
  // tester('a')
  // tester('b', 'c')

tester.call('this?', 'this', 'is')
  // tester.call(null, 'a', 'b')
tester.apply('this?', ['this', 'is'])

var anotherTester = function(a, b, c) {
  console.log(Object.getOwnPropertyNames(arguments));
}

anotherTester(1, 2, 3)
anotherTester.apply(null, ['a'])
var anotherTester2 = function() {
  console.log({
    this: null,
    'arguments': arguments,
    'length': arguments.length
  });
}
anotherTester2('oh', 'la', 'what')

function toArray() {
  return Array.prototype.slice.call(arguments, 0)
}

var logWrapper = function(f) {
  return function() {
    console.log('calling ' + f.name + 'with args: ' + arguments);
    return f.apply(this, arguments)
  }
}
console.log(logWrapper(toArray)(1, 2, 3));


var compositeFun = function() {
  var fns = arguments
  var length = arguments.length;
  return function() {
    var i = length;
    while (--i >= 0) {
      console.log('arg: ' + arguments);
      arguments = [fns[i].apply(this, arguments)];
    }
    return arguments[0]
  }
}

var add = function(a) {
  return a + a
}
var multiphy = function(a, b) {
  return a * b
}
console.log(compositeFun(add, multiphy)(2, 3));
