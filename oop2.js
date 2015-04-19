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
