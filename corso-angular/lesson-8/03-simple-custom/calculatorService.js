(function () {
	'use strict';

	angular.module('app')
		.service('calculator', function () {
				
				var me = this;

				me.sum = function (first, second) {
					
					if(!first || !second) {
						return null;
					}

					return parseInt(first) + parseInt(second);
				};

				me.subtract = function (first, second) {
					
					if(!first || !second) {
						return null;
					}

					return parseInt(first) - parseInt(second);
				};

				me.multiply = function (first, second) {
					
					if(!first || !second) {
						return null;
					}

					return parseInt(first) * parseInt(second);
				};

				me.divide = function (first, second) {
					
					if(!first || !second) {
						return null;
					}

					return parseInt(first) / parseInt(second);
				};

			});
}());

