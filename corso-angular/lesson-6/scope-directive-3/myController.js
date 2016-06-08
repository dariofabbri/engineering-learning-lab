(function () {
	'use strict';

	angular.module('app')
		.controller('myController', ['$scope', function ($scope) {

			$scope.subject = {
				name: 'Mario',
				surname: 'Rossi',
				jobTitle: 'Front-end guru',
				address: 'Viale dei Giardini, 1',
				phone: '+39 333 1234567',
				email: 'mario.rossi@google.it'
			};

		}]);
}());
