(function () {
	'use strict';

	angular.module('app')
		.directive('helloWorld', function () {

			return {
				// restrict: 'EACM',
				// replace: true,
    		template: '<div>Hello, World!</div>'
		  };

		});
}());
