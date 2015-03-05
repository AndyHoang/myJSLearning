function MyObject() {

}
MyObject.prototype.foo = function(smt) {
  console.log('foo doing ' + smt);
};

MyObject.prototype.run = function() {
  this.foo('inside run')
};

var test = new MyObject()

test.run()

function override(object, methodName, callback) {
  object[methodName] = callback(object[methodName])
}

override(test, 'foo', function(original) {
  return function() {
    var result = original.apply(this, arguments)
    console.log('overridden foo doing');
    return result
  }
})

test.run()
test.run()
