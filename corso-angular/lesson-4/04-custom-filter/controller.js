(function () {
	'use strict';

	angular.module('app')
		.controller('MyController', function () {
			
			var me = this;

			me.names = [
				'Mario',
				'Luigi',
				'Leonardo',
				'Eleonora',
				'Maurizio',
				'Silvia',
				'Alessia',
				'Camilla',
				'Beatrice',
				'Federico'
			];
		});
}());
