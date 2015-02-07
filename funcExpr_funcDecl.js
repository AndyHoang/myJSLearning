function doSomething() {

}

function doSomethingElse() {

}


function foo() {
	doSomething();
	doSomethingElse();
	console.log('type of bar:  ' + typeof bar);

	function bar() {

	}
}

function fooo() {
	doSomething();
	doSomethingElse();
	console.log('type of barr: ' + typeof barr);
	var barr = function() {

	}
}
foo();
fooo();


if (true) {
	function foo1() {
		return 'first';
	}
} else {
	function foo1() {
		return 'second';
	}
}
console.log(foo1());
