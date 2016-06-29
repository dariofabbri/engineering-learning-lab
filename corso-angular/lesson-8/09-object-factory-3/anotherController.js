(function () {
	'use strict';

	angular.module('app')
		.controller('AnotherController', [
			'myFactory',
			function (myFactory) {
				
				var me = this;

				me.name = myFactory.getName();
			}]);
}());

