describe("WateringService", function () {
    var sut, returnValue, DayTimeMock;
    var KEY = 'plants';
    beforeEach(function () {
        module("flowersJs");

        DateTimeService = {
            getDaysDiff: jasmine.createSpy().and.callFake(function (plant) {
                    return returnValue;
                })
        };
        
        module(function ($provide) {
            $provide.value('DateTimeService', DateTimeService);
        });
    });

    beforeEach(inject(function (WateringService) {
        sut = WateringService;
    }));

    it("should water the plant", function() {
        var plant = {};
        sut.water(plant);
        expect(plant.wateringDate.constructor.name).toEqual('Date'); //это плохо :(
    });

    it("should determine dying plants", function() {
        returnValue = 4;
        var plant = {
            wateringPeriod: 2,
        };
        expect(sut.isDying(plant)).toBe(true);  
    });

    it("should determine not dying plants", function() {
        returnValue = 1;
        var plant = {
            wateringPeriod: 2,
        };
        expect(sut.isDying(plant)).toBe(false);  
    });

});