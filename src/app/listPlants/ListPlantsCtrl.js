'use strict';
/*jshint esnext: true */
 angular.module('flowersJs')
   .controller('ListPlantsCtrl', ['$scope', 'LocalStorageService', 'WateringService', 'DateTimeService', function ($scope, LocalStorageService, WateringService, DateTimeService) {
    $scope.plants = LocalStorageService.getPlants();

    $scope.getDays = function(plant) {
      return new Array(DateTimeService.getDaysDiff(new Date, new Date(plant.wateringDate))); 
    };

    $scope.water = function(plant) {
      WateringService.water(plant);
      LocalStorageService.replacePlants($scope.plants);
    };
    
    $scope.isDying = WateringService.isDying;
}]);

