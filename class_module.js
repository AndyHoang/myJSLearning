function inherit(o) {
  if (o == null) throw TypeError();
  if (Object.create) return Object.create(o);
  var t = typeof o
  if (t !== 'object' && t !== 'function') throw TypeError();

  function f() {}
  f.prototype = o;
  return new f();
}

function range(from, to) {
  var r = inherit(range.methods)
  r.from = from;
  r.to = to;
  return r;
}
range.methods = {
  includes: function(x) {
    return (x >= this.from && x <= this.to)
  },
  foreach: function(f) {
    for (var a = Math.ceil(this.from); a <= this.to; a++) {
      f(a);
    }
  },
  toString: function() {
    return '( ' + this.from + ' ... ' + this.to + ' )'
  }

};

var testrange = range(2, 5);
testrange.foreach(console.log);
console.log(testrange.includes(3));
console.log(testrange.toString());


function Range(from, to) {
  this.from = from;
  this.to = to;

}

Range.prototype = {
  includes: function(x) {
    return (x >= this.from && x <= this.to)
  },
  foreach: function(f) {
    for (var a = Math.ceil(this.from); a <= this.to; a++) {
      f(a);
    }
  },
  toString: function() {
    return '( ' + this.from + ' ... ' + this.to + ' )'
  }
}

var r = new Range(10, 20);
console.log(r.includes(3));
console.log(r.toString());

var AnotherRange = function(from, to) {
  this.from = from;
  this.to = to;
}
AnotherRange.prototype = {
  includes: function(x) {
    return (x >= this.from && x <= this.to)
  },
  foreach: function(f) {
    for (var a = Math.ceil(this.from); a <= this.to; a++) {
      f(a);
    }
  },
  toString: function() {
    return '( ' + this.from + ' ... ' + this.to + ' )'
  }
}

var anotherR = new AnotherRange(12, 16);
console.log(r.includes(13));
anotherR.foreach(console.log);

//check if an object have these following methods
function quacks(o) {
  for (var i = 1; i < arguments.length; i++) {
    var arg = arguments[i];
    switch (typeof arg) {
      case 'string':
        {
          //name of a method
          if (o[arg] !== 'function') return false;
          continue;
        }
      case 'function':
        {
          arg = arg.prototype;
        }
      case 'object':
        {
          for (var m in arg) {
            if (typeof arg[m] !== 'function') continue;
            if (typeof o[m] !== 'function') return false;
          }
        }
    }
  };
  return true;
}

// console.log(quacks(r, AnotherRange));

function Set() {
  this.value = {};
  this.n = 0;
  this.add.apply(this, arguments);
}

Set.prototype.add = function() {
  for (var i = 0; i < arguments.length; i++) {
    var val = arguments[i];
    var str = Set._v2s(val);
    if (!this.value.hasOwnProperty(str)) {
      this.value[str] = val;
      this.n++;
    }
  };
  return this;
};

Set.prototype.remove = function() {
  for (var i = 0; i < arguments.length; i++) {
    var val = arguments[i];
    var str = Set._v2s(val);
    if (this.value.hasOwnProperty(str)) {
      delete this.value[str];
      this.n--;
    }
  };
  return this;
};

Set.prototype.contains = function(value) {
  var a = Set._v2s(value);
  console.log('v2s value: ' + a);
  return this.value.hasOwnProperty(a);

};

Set.prototype.size = function() {
  return this.value.n;
};

Set._v2s = function(val) {
  switch (val) {
    case undefined:
      return 'u';
    case null:
      return 'n';
    case true:
      return 't';
    case false:
      return 'f';
    default:
      switch (typeof val) {
        case 'number':
          return '#' + val;
        case 'string':
          return '"' + val;
        default:
          return '@' + objectId(val);
      }
  }
};
Set._v2s.next = 100;

function objectId(o) {
  var prop = "|**objectid**|"; // Private property name for storing ids
  if (!o.hasOwnProperty(prop)) // If the object has no id
    o[prop] = Set._v2s.next++; // Assign it the next available
  return o[prop]; // Return the id

};

// var aSet = new Set('a', 'c', new Range(3, 5))
// console.log(aSet.contains(new Range(3, 5)));
// console.log(aSet.contains(new Range(3, 5)));

// aSet.add(r);
// console.log(aSet.contains(r));
