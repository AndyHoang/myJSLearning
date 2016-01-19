//object literals
var firstName = "Andy",
  lastName = "Hoang",
  facebook = "silverhand31";
var user = {
  firstName, lastName, facebook
};
console.log(user);

//not support for node right now
//array destructuring
/*var colors = ['red', 'green', 'blue'];
var [primary, secondary, tertiary] = colors;
console.log(primary);*/


//arrow function
var greeting = (message) => {
  return message + ' ' + name;
};
var greeting2 = (message, name) => message + ' ' + name;
var greeting3 = name => 'my name is ' + name;
console.log(greeting('bonjour', 'andy'));
console.log(greeting2('hello', 'andy2'));
console.log(greeting3('andy2'));
console.log(((name) => 'single ' + name)('lalal'));

var total = 0;
[1, 2, 3].forEach(item => total = total + item);
console.log(total);

var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium"
];

console.log(a.map(s => s.length));

//lexical `this`
function Person(name) {
  this.name = name;
  this.age = 0;
  setInterval(() => {
    this.age++;
    console.log(name + ' is getting older');
  }, 1000);
  this.printAge = () => {
    console.log(this.age);
  }
}

var person1 = new Person('foody');
setTimeout(() => person1.printAge(), 5000);
