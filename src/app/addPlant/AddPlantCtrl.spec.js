describe("AddPlantCtrl", function () {

    var scope, controller, mockLocalStorage;

    beforeEach(function () {
        module("flowersJs");
    });

    mockLocalStorage = {
        addPlant: jasmine.createSpy()
    };

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller;
    })); 

    function executeController() {
        controller('AddPlantCtrl', {
            $scope: scope,
            LocalStorageService: mockLocalStorage
        });
    }
    
    it("should add a watering date to the plant before adding it to the LS", function() {
        executeController();
        scope.plant = {
            test: 123
        };
        scope.addPlant();
        expect(scope.plant.wateringDate).toEqual(new Date());
    });

    it("should push the plant to the LS", function() {
        executeController();
        scope.plant = {
            test: 123
        };
        scope.addPlant();
        expect(mockLocalStorage.addPlant).toHaveBeenCalledWith(scope.plant);
    });
});