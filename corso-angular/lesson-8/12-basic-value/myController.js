(function () {
	'use strict';

	angular.module('app')
		.controller('MyController', [
			'myValue',
			function (myValue) {
				
				var me = this;

				me.name = myValue;
			}]);
}());

