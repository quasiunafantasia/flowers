describe("DateTimeService", function () {
    var sut, returnValue, DayTimeMock;
    var KEY = 'plants';
    
    beforeEach(function () {
        module("flowersJs");

    });

    beforeEach(inject(function (DateTimeService) {
        sut = DateTimeService;
    }));

    it("should calculate diff between dates", function() {
        var date1 = new Date(2000, 1, 1);
        var diff = 2;
        var date2 = new Date(2000, 1, 1 + diff);
        expect(sut.getDaysDiff(date1, date2)).toEqual(diff);

    });

});