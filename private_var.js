var entity = {};

entity._property = "hello world";
Object.defineProperty(entity, "property", {
  get: function() {
    return this._property;
  },
  set: function(value) {
    this._property = value;
  },
  enumerable: true,
  configurable: true
});
console.log(entity.property);
entity._property = 6;
console.log(entity.property);
entity.property = 5;
console.log(entity.property);


var createProperty = function(obj, prop, currentValue) {
  Object.defineProperty(obj, prop, {
    get: function() {
      return currentValue + 'sdfjkl';
    },
    set: function(value) {
      currentValue = value;
    },
    enumerable: true,
    configurable: true
  });
}

var entity1 = {};

var myVar = "hello worldiiiii";
createProperty(entity1, "property", myVar);
console.log(entity1.property);

entity1.property = 'aaa';
console.log(entity1.property);


var entity2 = {
  property: 'inner property'
};

var createProperty = function(obj, prop) {
  var currentValue = obj[prop];
  Object.defineProperty(obj, prop, {
    get: function() {
      return currentValue;
    },
    set: function(newValute) {
      currentValue = newValute;
    },
    enumerable: true,
    configurable: true
  })
}

createProperty(entity2, 'property');

console.log(entity2.property);
entity2.property = 'aaaaxckjsdf';
console.log(entity2.property);
