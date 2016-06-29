(function () {
	'use strict';

	angular.module('app')
		.factory('myFactory', function ($log) {

			$log.info('Inside factory function.');

			function MyObject() {

				this.getName = function () {
					return 'World';
				};
			}

			return new MyObject();
		});
}());

