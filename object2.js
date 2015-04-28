function Foo_bar(foo, bar) {
  //use strict to fix set global have _foo, and _bar
  'use strict';
  if (this instanceof Foo_bar) {
    this._foo = foo;
    this._bar = bar;
    this.toString = function() {
      return this._foo + ' ' + this._bar;
    }
  } else return new Foo_bar(foo, bar);

}
Foo_bar.prototype.printOut = function() {
  return this._foo + ' ' + this._bar;
};
//without keywork "new" the "this" may referred to global
var fubar = Foo_bar('fcked up', 'oh no!')
console.log(fubar.printOut());
console.log(fubar.toString());

var AnObject = (function() {
  var instance = {};
  instance.foo = 'blah';
  return instance;
})();

console.log(AnObject.foo);
