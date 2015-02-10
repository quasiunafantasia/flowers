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
    
    it("should get the plants collection from the localStorage", function() {
         storedPlants = [{
            test: 123
        }];
        executeController();
        expect(scope.plants).toEqual(storedPlants);
    });
});