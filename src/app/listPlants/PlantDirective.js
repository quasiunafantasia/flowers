angular.module('flowersJs').
	directive('plant', ['$compile', 'WateringService', 'DateTimeService', 'LocalStorageService',
		function($compile, WateringService, DateTimeService, LocalStorageService) {
			
			function getDays(plant) {
	      		return DateTimeService.getDaysDiff(new Date, new Date(plant.wateringDate)); 
	    	}

	    	function water(plant) {
	      		WateringService.water(plant);
	      		this.$broadcast("watered");
	      		//this.$digest()
	      		//LocalStorageService.replacePlant(plant); will use $resource instead
	    	}

			return {
				templateUrl: "app/listplants/PlantTemplate.html",
				restrict: 'E',

				scope: {
	      			data: "=",

	    		},
	    		link: function(scope, element, attrs) {
	    			scope.getDays = getDays;
	    			scope.isDying = WateringService.isDying;
	    			scope.water = water;
	    		}
			};
		}
	]);