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
