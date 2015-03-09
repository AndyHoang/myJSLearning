function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.radius = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y).toFixed(3);
};

Point.prototype.toString = function() {
  return '( ' + this.x + ',' + this.y + ' )';
}

Point.ZERO = new Point(0, 0);
Point.BASE = new Point(1, 1);
Point.parse = function(aString) {
  try {
    var m = Point._format.exec(aString);
    return new Point(parseFloat(m[1]), parseFloat(m[2]));
  } catch (x) {
    throw new TypeError('cannot parse ' + m + 'to Point');
  }
}

Point._format = /^\(([^,]+),([^,]+)\)$/;

// var point1 = new Point(2, 3);
// console.log('point radius ' + point1.radius());
// console.log('parse point: ' + Point.parse('(3,7)').toString());
// console.log('point zero: ' + Point.ZERO);
