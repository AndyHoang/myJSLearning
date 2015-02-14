//http://zeekat.nl/articles/constructors-considered-mildly-confusing.html#sec-1
//http://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript

function PrintStuff(myDoc) {
  this.documents = myDoc;
}
PrintStuff.prototype.print = function() {
  console.log(this.documents);
};

var a = new PrintStuff('hehe')
var b = new PrintStuff('hihi')
  // a.print()
  // b.print()

ObjMaker = function abc() {
  this.a = 'first';
};
// ObjMaker is just a function, there's nothing special about it that makes
// it a constructor.

ObjMaker.prototype.b = 'second';
// like all functions, ObjMaker has an accessible prototype property that
// we can alter. I just added a property called 'b' to it. Like
// all objects, ObjMaker also has an inaccessible [[prototype]] property
// that we can't do anything with

obj1 = new ObjMaker();
// 3 things just happened.
// A new, empty object was created called obj1.  At first obj1 was the same
// as {}. The [[prototype]] property of obj1 was then set to the current
// object value of the ObjMaker.prototype (if ObjMaker.prototype is later
// assigned a new object value, obj1's [[prototype]] will not change, but you
// can alter the properties of ObjMaker.prototype to add to both the
// prototype and [[prototype]]). The ObjMaker function was executed, with
// obj1 in place of this... so obj1.a was set to 'first'.

console.log(obj1.a);
// returns 'first'
obj1.b;
// obj1 doesn't have a property called 'b', so JavaScript checks
// its [[prototype]]. Its [[prototype]] is the same as ObjMaker.prototype
// ObjMaker.prototype has a property called 'b' with value 'second'
// returns 'second'
ObjMaker.prototype.c = 'third'
console.log(obj1.c);
console.log(obj1.__proto__);
console.log(obj1.prototype);
