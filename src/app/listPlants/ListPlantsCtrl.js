'use strict';
/*jshint esnext: true */
 angular.module('flowersJs')
   .controller('ListPlantsCtrl', ['$scope', 'LocalStorageService', function ($scope, LocalStorageService) {
    $scope.plants = LocalStorageService.getPlants();
}]);

