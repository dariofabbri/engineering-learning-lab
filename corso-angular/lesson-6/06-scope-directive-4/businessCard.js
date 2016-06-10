(function () {
	'use strict';

	angular.module('app')
		.directive('businessCard', function () {

			return {
    		templateUrl: function (elem, attr) {
					return 'businessCard' + attr.type + '.html';
				}
		  };

		});
}());
