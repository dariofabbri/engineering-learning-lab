(function () {
	'use strict';

	angular.module('app')
		.controller('CrudController', ['$scope', '$log', function ($scope, $log) {
			
			// First AngularJS Controller responsibility: 
			// scope initialization
			//
			$scope.cities = [
				{ id: 1, name: 'Rome', country: 'Italy' },
				{ id: 2, name: 'Paris', country: 'France' },
				{ id: 3, name: 'London', country: 'United Kingdom' },
				{ id: 4, name: 'Berlin', country: 'Germany' },
				{ id: 5, name: 'Madrid', country: 'Spain' }
			];

			// Second AngularJS Controller responsibility: 
			// add behavior to scope
			//
			$scope.removeItem = function (id) {
				$log.info('Clicked on item id: ' + id);

				for (var i = 0; i < $scope.cities.length; i += 1) {
					if ($scope.cities[i].id === id) {
						$scope.cities.splice(i, 1);
						break;
					}
				}
			}

			/*
			// A more "functional" variant of the above code.
			//
			$scope.removeItem = function (id) {
				$log.info('Clicked on item id: ' + id);

				var index = findIndex($scope.cities, function (item) {
					return item.id === id;
				});

				if(index >= 0) {
					$scope.cities.splice(index, 1);
				}
			}

			function findIndex(array, predicate) {
				
				for (var i = 0; i < array.length; i += 1) {
					if(predicate(array[i])) {
						return i;
					}
				}

				return -1;
			}
			*/
		}]);
}());
