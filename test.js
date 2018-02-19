var tStabilizer = require('./tStabilizer.js');
var assert = require('assert');

assert(tStabilizer);

var myStabilizer = new tStabilizer();
myStabilizer.push(3);
myStabilizer.push(5);
myStabilizer.push(1);
myStabilizer.push(4);
myStabilizer.push(2);
// std tests
assert(myStabilizer.getAvarage() === 3, 'avg of [1,2,3,4,5] is not 3');
assert(myStabilizer.getMax() === 5, 'max of [1,2,3,4,5] is not 5');
assert(myStabilizer.getMin() === 1, 'min of [1,2,3,4,5] is not 1');

//test with length 10
var tenStabilizer = new tStabilizer(10);
assert(tenStabilizer.length = 10, 'the length of the tStabilizer is not 10');
assert(tenStabilizer.getAvarage() + '' === NaN + '', 'Avarage of empty values is not NaN');
assert(tenStabilizer.getMax() === -Infinity, 'max of empty values is not -Infinity');
assert(tenStabilizer.getMin() === Infinity, 'min of empty values is not Infinity');

for (var i = 0; i < 10; i++) {
    tenStabilizer.push(2);
}
assert(tenStabilizer.values.length == 10, 'not all ten values are stored');
assert(tenStabilizer.getAvarage() == 2 && tenStabilizer.getMax() == 2 && tenStabilizer.getMax() == 2, 'pushing 2 does not return 2');

console.log('no issue found, good job')