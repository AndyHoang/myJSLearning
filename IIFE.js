function makeCounter() {
	var i = 0
	return function() {
		console.log("var i:" + ++i);
	}
}
var counter = makeCounter();
// counter();
// counter();

// function makeValidation() {
// 	var result = {};
// 	return function(id) {
// 		result[id] = id;
// 	}

// }
// var validate = makeValidation();
// validate('abc')
// validate('cde')
var myCounter = (function() {
	var i = 0;
	return {
		get: function() {
			return i;
		},
		set: function(val) {
			i = val;
		},
		increment: function() {
			return ++i;
		}

	}
})


// console.log(myCounter.get());

var a = new myCounter();
// console.log(a.get());
// console.log(a.increment());
// (function() {
// 	console.log('hello world');
// })()
(function a() {
	var person = {
		sayHi: function() {
			console.log('Hiii!!!!');
		}
	}
	person.sayHi()
})()
