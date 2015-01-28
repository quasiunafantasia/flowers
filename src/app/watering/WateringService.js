'use strict';
/*jshint esnext: true */
angular.module('flowersJs')
	.factory('WateringService', ['DateTimeService', function(DateTimeService) {
		function water (plant) {
			plant.wateringDate = new Date();
		}
		function isDying(plant) {
			return DateTimeService.getDaysDiff(new Date(plant.wateringDate), new Date) >  plant.wateringPeriod;
		}; 			
		return {
			water: water,
			isDying: isDying
		}; 
}]);
	