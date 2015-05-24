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
  getInfo: function() {
    return 'Name :' + this.name + ' age: ' + this.age;
  },
  __proto__: Customer.prototype
}

console.log(hoang.getInfo());
console.log(hoang.sex);

var literalCustomer = {};
literalCustomer.constructor = Customer;
literalCustomer.name = 'liter';
literalCustomer.age = 15;
literalCustomer.getInfo = function() {
  return 'Name :' + this.name + ' age: ' + this.age;
}

console.log(literalCustomer.getInfo());

console.log(literalCustomer instanceof Customer);
console.log(literalCustomer.constructor);
console.log(hoang instanceof Customer); //<= hoang is a Customer?

function instance_of(V, F) {
  var O = F.prototype;
  V = V.__proto__;
  while (true) {
    if (V === null)
      return false;
    if (O === V)
      return true;
    V = V.__proto__;
  }
}

// how __proto__ work in new Object?
