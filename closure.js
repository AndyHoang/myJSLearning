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
