(function () {
	'use strict';

	angular.module('app')
		.controller('MyController', [
			'myService',
			function (myService) {
				
				var me = this;

				me.name = myService.getName();
			}]);
}());

