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
