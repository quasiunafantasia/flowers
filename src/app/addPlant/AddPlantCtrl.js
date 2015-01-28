'use strict';
/*jshint esnext: true */
 angular.module('flowersJs')
   .controller('AddPlantCtrl', ['$scope', 'LocalStorageService', function ($scope, LocalStorageService) {

    $scope.plant = {
      src: './../assets/images/flower.jpg',
      name: 'Peashooter',
      wateringPeriod: 7
    };
    
    $scope.addPlant = function() {
      $scope.plant.wateringDate = new Date();
      LocalStorageService.addPlant($scope.plant);
    };
}]);

