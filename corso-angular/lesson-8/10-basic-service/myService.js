(function () {
	'use strict';

	angular.module('app')
		.service('myService', function ($log) {

			$log.info('Inside service constructor function.');

			this.getName = function () {
				return 'World';
			};
		});
}());

