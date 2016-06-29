(function () {
	'use strict';

	angular.module('app')
		.controller('MyController', [
			'myProvider',
			function (myProvider) {
				
				var me = this;

				me.name = myProvider.getName();
			}]);
}());

