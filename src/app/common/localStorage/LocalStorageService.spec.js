/*
describe("LocalStorageService", function () {
    var sut, windowMock, localStorageReturnValue;
    var KEY = 'plants';
    beforeEach(function () {
        module("flowersJs");

        windowMock = {
            localStorage: {
                getItem: jasmine.createSpy().and.callFake(function () {
                    return localStorageReturnValue;
                }),
                setItem: jasmine.createSpy(),
            }
        };
        
        module(function ($provide) {
            $provide.value('$window', windowMock);
        });
    });

    beforeEach(inject(function (LocalStorageService) {
        console.log(LocalStorageService);
        sut = LocalStorageService;
    }));

    it("should add a flower to the empty storage", function() {
        //console.log(sut.addPlant);
        localStorageReturnValue = '';
        var samplePlant = {value: 'test'};
        sut.addPlant(samplePlant);
        //expect(windowMock.localStorage.setItem).toHaveBeenCalled();
        expect(windowMock.localStorage.setItem).toHaveBeenCalledWith(KEY, JSON.stringify([samplePlant]));
    });

    it("should add a flower to the storage", function() {
        var existingFlowers = [{sample: 123}, {someValue: 345}];
        localStorageReturnValue = JSON.stringify(existingFlowers);
        var samplePlant = {value: 'test'};
        var resultingPlants = existingFlowers.concat([samplePlant]);
        sut.addPlant(samplePlant);
        //expect(windowMock.localStorage.setItem).toHaveBeenCalled();
        expect(windowMock.localStorage.setItem).toHaveBeenCalledWith(KEY, JSON.stringify(resultingPlants));
    });

    it("should get the flowes from the localStorage", function() {
        var existingFlowers = [{value:'test'}, {test: 'val'}];
        localStorageReturnValue = JSON.stringify(existingFlowers);
        var rez = sut.getPlants();
        expect(rez).toEqual(existingFlowers);

    });
});
 */