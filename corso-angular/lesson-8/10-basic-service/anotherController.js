(function () {
	'use strict';

	angular.module('app')
		.controller('AnotherController', [
			'myService',
			function (myService) {
				
				var me = this;

				me.name = myService.getName();
			}]);
}());

