function Tester() {

}

Tester.prototype.saveResults = function(filePath) {
  console.log('Save result to: ' + filePath);
};

Tester.prototype.run = function() {
  console.log('Running....');
  this.saveResults('test.xml')
};

var test = new Tester()
var test2 = new Tester()
  //test.run();

function trace(o, m) {
  var original = o[m];
  // why set o[m] effect on test
  return o[m] = function() {
    console.log(new Date(), "Entering:", m);
    var result = original.apply(this, arguments); // Invoke original.
    console.log(new Date(), "Exiting:", m); // Log message.
    return result; // Return result.
  };

}

function trace_updated(o, m) {
  var original = o[m];
  var arg = Array.prototype.slice.call(arguments, 2);

  return function() {
    console.log(new Date(), "Updated Entering:", m);
    var result = original.apply(this, arg); // Invoke original.

    console.log(new Date(), "Updated Exiting:", m); // Log message.
    return result; // Return result.

  }()
}

trace(test, 'saveResults')('abc.xml')
trace_updated(test2, 'saveResults', 'cde.xml')


// style with local fn
var MY_OBJECT = {}
MY_OBJECT.A_Object = (function() {
  return {
    a_method: function(aString) {
      console.log('this is a_method ' + aString);
    }
  }
}())

MY_OBJECT.tracing = (function() {
  return function(o, m) {
    var original = o[m];

    (function() {
      console.log('tracing start...');
      var result = original.apply(this, arguments)
      console.log('tracing end');
      return result;
    }())
  }
}());


// MY_OBJECT.tracing(MY_OBJECT.A_Object, 'a_method')
