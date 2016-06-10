(function () {
	'use strict';

	angular.module('app')
		.controller('myController', ['$scope', function ($scope) {

			$scope.subject1 = {
				name: 'Mario',
				surname: 'Rossi',
				jobTitle: 'Front-end guru',
				address: 'Viale dei Giardini, 1',
				phone: '+39 333 1234567',
				email: 'mario.rossi@google.it'
			};

			$scope.subject2 = {
				name: 'Luigi',
				surname: 'Bianchi',
				jobTitle: 'Full stack developer',
				address: 'Parco della Vittoria, 1',
				phone: '+39 333 2345678',
				email: 'luigi.bianchi@google.it'
			};

			$scope.doIt = function () {
				alert('Somebody clicked me?');
			};

		}]);
}());
