function showName(fn, ln) {
	var intro = 'Your name is: '

	return function() {
		console.log(intro + ln + ' ' + fn);
	}();
}
showName('Andy', 'Hoang')



function idCreator(persons) {
	var i;
	var anchorId = 99;
	for (var i = persons.length - 1; i >= 0; i--) {
		persons[i]['id'] = function() {
			return anchorId + i
		}()
	};
	return persons;
};


var personsList = [{
	name: 'Andy',
	id: 0
}, {
	name: 'Bendy',
	id: 0
}];

var afterCreate = idCreator(personsList);

console.log(afterCreate[0].id);

var scope = 'global'
var checkScope = function() {
	var scope = 'local scope'

	function f() {
		//var scope = 'inside';
		return scope
	}
	return f()
}
console.log(checkScope());

var uniqueCounter = (function() {
	var count = 0;
	return function() {
		return ++count;
	}
}())
console.log(uniqueCounter());
console.log(uniqueCounter());

function func(v) {
	return function() {
		return v
	}
}

var funcs = []
for (var i = 0; i < 10; i++) {
	funcs[i] = func(i)
}

function create_funcs() {
	var funcs_local = []
	for (var i = 0; i < 10; i++) {
		funcs_local[i] = function() {
			return i
		}

	};
	return funcs_local
}

var funcs2 = create_funcs()
console.log(funcs2[5]());
(function() {
	var scope = 'a';

	function callScope() {
		return scope;
	};
	console.log(callScope());


})();
