'use strict';
/*jshint esnext: true */
angular.module('flowersJs')
	.factory('LocalStorageService', ['$window', function($window) {
		function _get (index, defaultVal) {
			var val = $window.localStorage.getItem(index) || defaultVal;
			//console.log(val);
			return 	JSON.parse(val);
		} 
		
		function _put (index, item) {
			item = item || '';
			//console.log('put');
			//console.log(item);
			var val = JSON.stringify(item);
			//console.log(val);
			$window.localStorage.setItem(index, val);
		}
		
		function _append (index, item) {
			var val = _get(index, '[]').concat([item]);
			return _put(index, val);
		} 
			
		return {
			addPlant: _append.bind(null, 'plants'),
			getPlants: _get.bind(null, 'plants', '[]'),
			replacePlants: _put.bind(null, 'plants')
		}; 
}]);
	