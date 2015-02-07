var myNum = 100;

var obj = {
  myNum: 1,
  add: function(a, b) {
    var sum = this.myNum + a + b;
    return this.myNum + ' + ' + a + ' + ' + b + ' = ' + sum;
  }
}
console.log(obj.add(2, 3));

var b = obj.add;
// console.log(b(2, 3));
console.log(b.call(obj, 2, 3));
console.log(b.apply(obj, [5, 6]));

var c = obj.add.bind(obj);
console.log(c(2, 4));

var d = obj.add.bind(obj, 2, 4, 36);

console.log(d());

function testing(a, b) {
  var c = a + b;
  console.log(c);
}

var bind = Function.prototype.call.bind(Function.prototype.bind);

var call = bind(Function.prototype.call, Function.prototype.call);

var apply = bind(Function.prototype.call, Function.prototype.apply);

testing.call(this, 3, 5)
Function.prototype.call.call(testing, 2, 6)

function testing2() {
  console.log('hehe');
}

testing2.call(this)
Function.prototype.call.call(testing)

var callBoundTesting = Function.prototype.call.bind(testing);
callBoundTesting(1, 1)
