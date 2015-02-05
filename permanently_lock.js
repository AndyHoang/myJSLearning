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

var d = obj.add.bind(obj, 2);

console.log(d(5));
