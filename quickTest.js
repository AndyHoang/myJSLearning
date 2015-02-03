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
