var monkeyCount = require('../8kyu/count_the_monkeys/count_the_monkeys');

var assert = require('assert');
describe('Monkey count test', function () {
 it('should return number of monkeys', function () {
        assert.deepEqual(monkeyCount.addTested(5), [1, 2, 3, 4, 5]);
        assert.deepEqual(monkeyCount.addTested(3), [1, 2, 3]);
        assert.deepEqual(monkeyCount.addTested(9), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        assert.deepEqual(monkeyCount.addTested(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        assert.deepEqual(monkeyCount.addTested(20), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });
});
