(function () {
	'use strict';

	angular.module('app')
		.directive('businessCardObject', function () {

			return {
				restrict: 'E',
				scope: {
					name: '=name',
					surname: '=surname',
					jobTitle: '=jobTitle',
					email: '=email',
					address: '=address',
					phone: '=phone'
				},
    		templateUrl: function (elem, attr) {
					return 'businessCard' + attr.type + '.html';
				}
		  };

		});
}());
