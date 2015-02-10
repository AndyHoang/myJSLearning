var userData = [];

function logStuff(userData) {
	if (typeof(userData) === 'string') {
		console.log(userData);

	} else if (typeof(userData) === 'object') {
		for (var id in userData) {
			console.log(id + ' : ' + userData[id]);
		}
	}
}

var royalName = 'Hoang'

function getInput(input, callback) {
	userData.push(input);
	if (typeof(callback) === 'function') {
		callback(input)

	};
}

getInput({
	name: 'Andy',
	special: 'joke'
}, logStuff)


var clientData = {
	id: 012315,
	fullName: 'Not set',
	setUserName: function(fname, lname) {
		this.fullName = fname + ' ' + lname
	}
}

function getUserInput(fname, lname, callback) {

	// callback.bind(clientData)(fname, lname)
	callback.call(clientData, fname, lname)
}
getUserInput("Barack", "Obama", clientData.setUserName);
console.log(clientData.fullName);
