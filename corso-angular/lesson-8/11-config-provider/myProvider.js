(function () {
	'use strict';

	angular.module('app')
		.provider('myProvider', function () {

			var me = this;

			// Injecting $log would not have been possible, 
			// providers are executed too early...
			//
			console.log('Inside provider function.');

			me.name = 'World';

			me.setName = function (s) {
				me.name = s;
			};

			me.$get = function () {

				console.log('Inside $get function.');

				return {
					
					getName: function () {
						return me.name;
					}
				};
			};

		});
}());

