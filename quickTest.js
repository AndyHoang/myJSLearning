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
var solveProblem = function() {
	var x, y, z;
	for (x = 0; x <= 100; x++) {
		for (y = 0; y <= 100; y++) {
			if (x + y <= 100) {
				z = 100 - x - y;
				if (z % 3 === 0 && 5 * x + 3 * y + z / 3 === 100) {
					console.log(x + ' ' + y + ' ' + z);
					break;
				}
			} else {
				break;
			}
		}
	};
}()

var testSwitch = function(i) {
	switch (i) {
		case 1:
			{

				console.log('case 1');

			}
		case 2:
			{
				console.log('case 2');
				i = 3;
			}
		case 3:
			{
				console.log('case 3')
				break;
			}
	}

}

// testSwitch(2);

var a = [1, 2, 3, 4];
// console.log(a.slice(0, -1));


function testing(aArray, callback, parents) {
	// callback.bind(null, parents);
	aArray.forEach(callback.bind(null, parents))


}


function toPrintOut(i) {
	console.log('agurments: ' + Array.prototype.slice.call(arguments));

}

testing(['a', 'b', 2, 3, 4], toPrintOut, 10);


function list() {
	console.log(arguments);
	return (Array.prototype.slice.call(arguments));
}
var list1 = list(1, 2, 3);
// console.log(list1);

var list2 = list.bind(null, 5)(1, 2, 3);
// console.log(list2);
