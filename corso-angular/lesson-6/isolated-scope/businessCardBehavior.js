(function () {
	'use strict';

	angular.module('app')
		.directive('businessCardBehavior', function () {

			return {
				restrict: 'E',
				scope: {
					name: '=',
					surname: '=',
					jobTitle: '=',
					email: '=',
					address: '=',
					phone: '=',
					alert: '&'
				},
    		templateUrl: function (elem, attr) {
					return 'businessCard' + attr.type + '.html';
				}
		  };

		});
}());
