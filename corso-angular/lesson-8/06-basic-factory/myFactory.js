(function () {
	'use strict';

	angular.module('app')
		.factory('myFactory', function ($log) {

			// Notice that we can inject $log in this case.
			//
			$log.info('Inside factory function.');

			return 'World';
		});
}());

