describe("AddPlantCtrl", function () {

    var scope, controller, mockLocalStorage, mockWateringService, mockDateTimeService,
        storedPlants, daysDiff;

    beforeEach(function () {
        module("flowersJs");
    });

    mockLocalStorage = {
        replacePlants: jasmine.createSpy(),
        getPlants: jasmine.createSpy().and.callFake(function() {
            return storedPlants;
        })
    };

    mockWateringService = {
        water: jasmine.createSpy()
    };

    mockDateTimeService = {
        getDaysDiff: jasmine.createSpy().and.callFake(function() {
            return daysDiff;
        })
    }

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller;
    })); 

    function executeController() {
        controller('ListPlantsCtrl', {
            $scope: scope,
            LocalStorageService: mockLocalStorage,
            WateringService: mockWateringService,
            DateTimeService: mockDateTimeService
        });
    }
    
    it("should return an iterable of length = days without watering", function() {
        daysDiff = 2;
        executeController();
        var arr = scope.getDays({wateringDate: 1});
        expect(arr.length).toEqual(2);
    });

    it("should water the plant", function() {
        storedPlants = [{
            test: 123
        }];
        executeController();
        var plant = scope.plants[0];
        scope.water(plant);
        expect(mockWateringService.water).toHaveBeenCalledWith(plant);
    });

    it("should update the plants in the local storage after watering", function() {
        storedPlants = [{
            test: 123
        }];
        executeController();
        var plant = scope.plants[0];
        scope.water(plant); //call by reference
        expect(mockLocalStorage.replacePlants).toHaveBeenCalledWith(storedPlants);
    });
});