(function () {
	'use strict';

	angular.module('app')
		.factory('myFactory', function ($log) {

			$log.info('Inside factory function.');

			return new function () {

				this.getName = function () {
					return 'World';
				};
			};
		});
}());

