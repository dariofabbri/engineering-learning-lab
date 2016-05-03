(function () {
	'use strict';

	angular.module('app')
		.controller('CrudController', ['$scope', '$log', function ($scope, $log) {

			var findIndex = function (array, predicate) {
				
				for (var i = 0; i < array.length; i += 1) {
					if(predicate(array[i])) {
						return i;
					}
				}

				return -1;
			}

			var findIndexById = function(array) {
				
				return function (id) {
					return findIndex(array, function (item) {
						return item.id === id;
					});
				};
			}

			var findMaxId = function(array) {

				var max = Number.NEGATIVE_INFINITY;
				for (var i = 0; i < array.length; i += 1) {
					if (array[i].id > max) {
						max = array[i].id;
					}
				}

				return max;
			}

			$scope.city = {};
			
			$scope.cities = [
				{ id: 1, name: 'Rome', country: 'Italy' },
				{ id: 2, name: 'Paris', country: 'France' },
				{ id: 3, name: 'London', country: 'United Kingdom' },
				{ id: 4, name: 'Berlin', country: 'Germany' },
				{ id: 5, name: 'Madrid', country: 'Spain' }
			];

			var findCityIndexById = findIndexById($scope.cities);

			$scope.removeItem = function (id) {
				$log.info('Clicked on item id: ' + id);

				var index = findCityIndexById(id);
				if (index >= 0) {
					$scope.cities.splice(index, 1);
				}
			};

			$scope.editItem = function (id) {

				var index = findCityIndexById(id);
				if (index >= 0) {
					
					// Try this: it keeps the reference and will update the row while
					// editing the form!
					//
					// $scope.city = $scope.cities[index];

					$scope.city.id = $scope.cities[index].id;
					$scope.city.name = $scope.cities[index].name;
					$scope.city.country = $scope.cities[index].country;
				}
			};

			$scope.add = function () {
				
				var max = findMaxId($scope.cities);

				$scope.cities.push({
					id: max >= 0 ? max + 1 : 0,
					name: $scope.city.name,
					country: $scope.city.country
				});
			};

			$scope.update = function () {
				
				var index = findCityIndexById($scope.city.id);
				if(index < 0) {
					alert('No row selected for editing!');
				}

				var city = $scope.cities[index];
				city.name = $scope.city.name;
				city.country = $scope.city.country;
			};
		}]);
}());
