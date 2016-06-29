(function () {
	'use strict';

	angular.module('app')
		.controller('MyController', [
			'calculator',
			function (calculator) {
				
				var me = this;

				me.first = null;
				me.second = null;
				me.result = null;

				me.sum = function () {
					me.result = calculator.sum(me.first, me.second);
				};

				me.subtract = function () {
					me.result = calculator.subtract(me.first, me.second);
				};

				me.multiply = function () {
					me.result = calculator.multiply(me.first, me.second);
				};

				me.divide = function () {
					me.result = calculator.divide(me.first, me.second);
				};

			}]);
}());

