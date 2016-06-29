(function () {
	'use strict';

	angular.module('app')
		.controller('AnotherController', [
			'myProvider',
			function (myProvider) {
				
				var me = this;

				me.name = myProvider;
			}]);
}());

