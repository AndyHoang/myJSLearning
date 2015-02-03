function bindFirstArgs(fn, a) {
	// console.log("fn: " + fn);
	// console.log("a: " + a);
	return function(b) {
		// console.log("a in function: " + a);
		// console.log("b : " + b);
		return fn(a, b)
	}
}

function add(a, b) {
		return a + b
	}
	// var makerAdder = bindFirstArgs(bindFirstArgs, add)
	// console.log("--------------------------------------------");
	// var addOne = makerAdder(1)
	// console.log("------------------------------------------");
	// console.log(addOne(3));

function parital(fn) {
	var slice = Array.prototype.slice;
	var args = slice.call(arguments, 1)
	return function() {
		return fn.apply(this, args.concat(slice.call(arguments, 0)))
	}
}

function test() {
		var slice = Array.prototype.slice
		var args = slice.call(arguments, 1)
		var argsFull = slice.call(arguments, 0)
			// console.log("args: " + args);
			// console.log("argsFull: " + argsFull);
	}
	//test(add, 1, 2, 3, 4, 5, 6, 7)

function addAll() {
		var sum = 0
		for (var i = arguments.length - 1; i >= 0; i--) {
			sum += arguments[i]
		};
		return sum
	}
	// console.log(addAll(1, 2, 3, 4));
	// var addOne = parital(addAll, 1, 2)
	//console.log(addOne(1));
	// var alwaysNine = parital(add, 4, 5)
	// console.log(alwaysNine(5));



var abc = function() {
	var slice = Array.prototype.slice;

	function partialAny(fn) {
		var orig = slice.call(arguments, 1);
		console.log('all orig: ' + orig);
		return function() {
			var allArgs = slice.call(arguments, 0)
			console.log('all args here: ' + allArgs);

			var args = []
			for (var i = 0; i < orig.length; i++) {
				args[i] = orig[i] === __ ? allArgs.shift() : orig[i];
			};
			console.log('args here: ' + args);
			console.log('fn: ' + fn);
			return fn.apply(this, args.concat(allArgs))
		}
	}
	return partialAny;
};

function hex(r, g, b) {
		return '#' + r + g + b
	}
	// console.log(hex('11', '12', '13'));
var __;
var blueMax = abc(hex, __, __, 'ff');
console.log(blueMax(hex, '11', '22')());
