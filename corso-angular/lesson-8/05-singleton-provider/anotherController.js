(function () {
	'use strict';

	angular.module('app')
		.controller('AnotherController', [
			'myProvider',
			function (myProvider) {
				
				console.log('Inside AnotherController');
				var me = this;

				me.name = myProvider;
			}]);
}());

