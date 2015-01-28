'use strict';
/*jshint esnext: true */
angular.module('flowersJs')
	.factory('DateTimeService', function() {
		function diff (dateA, dateB) {
			return Math.floor(Math.abs(dateA.getTime() - (dateB).getTime()) / (1000 * 3600 * 24)); 
		}
		return {
			getDaysDiff: diff
		}; 
});
	