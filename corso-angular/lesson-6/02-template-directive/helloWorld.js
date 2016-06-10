(function () {
	'use strict';

	angular.module('app')
		.directive('helloWorld', function () {

			return {
    		templateUrl: 'helloWorld.html'
		  };

		});
}());
