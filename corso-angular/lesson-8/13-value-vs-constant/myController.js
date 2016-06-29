(function () {
	'use strict';

	angular.module('app')
		.controller('MyController', [
			'myValue',
			'myConstant',
			function (myValue, myConstant) {
				
				var me = this;

				me.name = myValue;
				me.greeter = myConstant;
			}]);
}());

