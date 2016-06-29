(function () {
	'use strict';

	angular.module('app')
		.provider('myProvider', function () {

			this.$get = function () {
				return 'World';
			};
		});
}());

