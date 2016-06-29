(function () {
	'use strict';

	angular.module('app')
		.controller('MyController', [
			'myFactory',
			function (myFactory) {
				
				var me = this;

				me.name = myFactory.getName();
			}]);
}());

