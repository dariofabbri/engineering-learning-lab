(function () {
	'use strict';

	angular.module('app')
		.factory('myFactory', function ($log) {

			$log.info('Inside factory function.');

			var service = {

				getName: function () {
					return 'World';
				}
			};

			return service;
		});
}());

