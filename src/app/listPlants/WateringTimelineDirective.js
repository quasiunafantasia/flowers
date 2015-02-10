angular.module('flowersJs').
	directive('watering', ['$compile', 'WateringService', 'DateTimeService', 'LocalStorageService',
		function($compile, WateringService, DateTimeService, LocalStorageService) {
			return {
				templateUrl: "app/listplants/WateringTimelineTemplate.html",
				restrict: 'E',
				scope: {
					days: "@"
	    		},
	    		link: function(scope, element, attrs) {
	    			scope.daysArray = new Array(scope.days * 1);
					attrs.$observe('days', function(val){
						scope.daysArray = new Array(val * 1);
					});
	    		}
			};
		}
	]);