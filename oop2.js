function Product(name, price) {
  this.name = name;
  this.price = price;
  var _discount = 0;
  Object.defineProperty(this, 'discount', {
    get: function() {
      return _discount;
    },
    set: function(value) {
      _discount = value;
      if (_discount > 80) _discount = 80;
    }
  })
}
Product.prototype.printOut = function() {
  return ('name: ' + this.name + ', price: ' + this.price + ', discount: ' + this.discount);
};

var book = new Product('book', 20);
console.log(book.printOut());


book.discount = 50;
console.log(book.printOut());
book.discount += 40;
console.log(book.discount);

var product1 = new Product('one', 20);
var product2 = new Product('two', 30);
console.log(product1 instanceof Product);
console.log(product2 instanceof Product);

product2.constructor = {};
console.log(product2 instanceof Product);
console.log(Object.getPrototypeOf(product1));
console.log(Object.getPrototypeOf(product2));
console.log(product1.constructor);
console.log(Product.prototype);
console.log('#############');
// console.log(product1.__proto__);

//http://javascript.info/tutorial/constructor

function Rabbit() {
  console.log(this.constructor);
}
console.log(Rabbit.prototype);
// Rabbit.prototype = {}
var rabbit = new Rabbit()
console.log('rabbit have constructor: ' + rabbit.hasOwnProperty('constructor'));
console.log('Rabbit prototype have constructor: ' + Rabbit.prototype.hasOwnProperty('constructor'));
//Rabbit.prototype is also rabbit.__proto__
console.log('rabbit __proto__ have contructor: ' + rabbit.__proto__.hasOwnProperty('constructor'));


console.log(rabbit.__proto__ == Rabbit.prototype);
console.log(rabbit.constructor == Rabbit);
console.log(Rabbit.prototype.constructor == rabbit.constructor);

//http://www.mollypages.org/misc/js.mp
