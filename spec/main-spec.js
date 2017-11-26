const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    var wait = 5;
    var run = 12;
    it("money", function () {
        spyOn(console, 'log');

        main.allmoney(run, wait);
        expect(console.log).toHaveBeenCalledWith(12);
    })
});
