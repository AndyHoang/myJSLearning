function User(theName, theEmail) {
	this.fullName = theName;
	this.email = theEmail;
	this.quizScores = [];
	this.currentScore = 0;
}

User.prototype = {
	constructor: User,
	saveScore: function(scoreToAdd) {
		this.quizScores.push(scoreToAdd)
	},
	showNamesAndScore: function() {
		var scores = this.quizScores.length > 0 ? this.quizScores.join(',') : 'No scores yet'
		return this.fullName + ' have scores ' + scores
	},
	changeEmail: function(newEmail) {
		this.email = newEmail
		return 'New Saved email: ' + this.email
	}

}

firstUser = new User("Richard", "Richard@examnple.com");
var secondUser = new User("Andy", 'andhhoang@gmail.com')
console.log(firstUser.changeEmail("RichardEidted@examnple.com"));
console.log(firstUser.email);
console.log(secondUser.email);
firstUser.saveScore(10);
firstUser.saveScore(15);
console.log(firstUser.showNamesAndScore());
