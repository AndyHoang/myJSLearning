function person(name) {
	function get() {
		return name;
	}

	function set(newName) {
		name = newName;
	}
	return [get, set]
}
console.log(person('aaa')[0]());


function helloIIFE() {
	return function() {
		return function() {
			console.log('helloWord');
		}
	}()
}
helloIIFE()();


function hello() {
	return function() {
		return function() {
			console.log('helloNormalWorld');
		}
	}
}
hello()()();


var test = require('./parital_application.js');



function fnForTest() {
	var args = Array.prototype.slice.call(arguments, 0)
	var sum = 0
	for (var i = arguments.length - 1; i >= 0; i--) {
		sum += arguments[i]

	};
	return sum;
}

var a = test.partial(fnForTest, 1)
console.log(a(2, 3));
console.log(test.superPartial(fnForTest, 3)(3, 3));


var a = function() {
	console.log('hello a');
}

function b() {
	console.log('hello b');
}
a();
b();

c = b();
