(function () {
	'use strict';

	angular.module('app')
		.provider('myProvider', function () {

			// Injecting $log would not have been possible, 
			// providers are executed too early...
			//
			console.log('Inside provider function.');

			this.$get = function () {

				console.log('Inside $get function.');

				return 'World';
			};
		});
}());

