function memorize(f) {
  var cache = {}
  return function() {
    var key = arguments.length + Array.prototype.join.call(arguments, ',')
      // console.log('the key: ' + key);
    if (key in cache) return cache[key];
    else {
      cache[key] = f.apply(this, arguments)
      return cache[key];
    }
  }
}


function gcd(a, b) {
  var t;
  if (a < b) {
    t = b;
    b = a;
    a = t;

  }
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  console.log('run real gcd');
  return a;
}

var gcdmemo = memorize(gcd);
console.log(gcdmemo(15, 35));
console.log(gcdmemo(15, 35));
console.log(gcdmemo(15, 35));
