(function () {
	'use strict';

	angular.module('app')
		.controller('myController', ['$scope', function ($scope) {

			$scope.format = 'dd/MM/yyyy H:mm:ss';

		}]);
}());
