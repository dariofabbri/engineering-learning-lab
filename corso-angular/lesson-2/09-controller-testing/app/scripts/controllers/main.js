'use strict';

/**
 * @ngdoc function
 * @name controllerTestingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the controllerTestingApp
 */
angular.module('controllerTestingApp')
  .controller('MainCtrl', function ($scope) {

		$scope.persons = [];

		$scope.add = function () {
			
			$scope.persons.push({
				name: this.generateRandomString(20),
				surname: this.generateRandomString(20),
				age: this.generateRandomNumber(1, 99)
			});
		}

		$scope.remove = function (item) {
			
			for (var i = 0; i < $scope.persons.length; i += 1) {

				if ($scope.persons[i] === item) {
					$scope.persons.splice(i, 1);
					return;
				}
			}
		}

		$scope.generateRandomString = function (maxLength) {
			
			var length = Math.floor(Math.random() * maxLength + 1);

			var s = '';
			var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			for(var i = 0; i < length; i += 1) {
				s += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
			}

			return s;
		};

		$scope.generateRandomNumber = function (min, max) {
			
			return Math.floor(Math.random() * (max - min) + min);
		}
  });
