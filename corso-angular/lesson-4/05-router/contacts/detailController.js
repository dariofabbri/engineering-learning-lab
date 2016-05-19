(function () {
	'use strict';

	angular.module('app')
		.controller('ContactDetailCtrl', function ($stateParams, $rootScope) {
			
			var me = this;

			for (var i = 0; i < $rootScope.contacts.length; i+= 1) {
				
				if ($rootScope.contacts[i].id === $stateParams.id) {
					me.contact = $rootScope.contacts[i];
					break;
				}
			}

		});
}());

