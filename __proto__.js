function Customer(name, age) {
  this.name = name;
  this.age = age;
  this.getInfo = function() {
    return 'Name :' + this.name + ' age: ' + this.age;
  }
}

var andy = new Customer('Andy', 25);
andy.sex = 'male';
console.log(andy.getInfo());


var hoang = {
  name: 'Hoang',
  age: '30',
  __proto__: andy
}

console.log(hoang.getInfo());
console.log(hoang.sex);
