function curry(fn, n) {
	n = n || fn.length

	return function getCurriedFN(prev) {

		return function(arg) {

			var args = prev.concat(arg)
			if (args.length < n) {
				return getCurriedFN(args);

			} else {
				return fn.apply(this, args);
			}
		}
	}([])
}

function superCurry(fn, n) {
	n = n || fn.length;
	return function superCurriedFn(prev) {
		return function() {
			var args = prev.concat(Array.prototype.slice.call(arguments, 0))
			if (args.length < n) {
				return superCurriedFn(args)
			} else {
				return fn.apply(this, args)
			};
		}

	}([]);
}


function parital(fn) {
	var slice = Array.prototype.slice;
	var orig = slice.call(arguments, 1)
	return function() {
		return fn.apply(this, orig.concat(slice.call(arguments, 0)))
	}
}

var i = 0;

function show(arg1, arg2, arg3) {
		return ++i + ': ' + arg1 + ' ' + arg2 + ' ' + arg3;
	}
	// console.log(show(1));
	// console.log(show('hihi', 'hehe', 'hoho'));
	// console.log(curry(show)(1)(2)(3));
	// console.log(curry(show)()()(3));
console.log(curry(show)(1, 2)(3)(3));
// console.log(superCurry(show)(1, 2)(3));
// console.log(superCurry(show)()()(1)(2)(3));
// console.log('-----------------------------');

function add3Param(a, b, c) {
	var sum = a + b + c;
	return a + ' + ' + b + ' + ' + c + ' = ' + sum;
}

var testParital = parital(add3Param, 1)
// console.log(testParital(2, 3));
// console.log(testParital(2));
// console.log('-- -- -- -- -- -- -- -- -- -- -- --');
// console.log(curry(add3Param)(1)(2)(3));