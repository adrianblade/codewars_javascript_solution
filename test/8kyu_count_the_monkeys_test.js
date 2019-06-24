var monkeyCount = require('../8kyu/count_the_monkeys/count_the_monkeys');

var assert = require('assert');
describe('Monkey count test', function () {
 it('should return number count of', function () {
        assert.equal(monkeyCount.addTested(5), [1, 2, 3, 4, 5]);
        assert.equal(monkeyCount.addTested(3), [1, 2, 3]);
        assert.equal(monkeyCount.addTested(9), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        assert.equal(monkeyCount.addTested(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        assert.equal(monkeyCount.addTested(20), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });
});
