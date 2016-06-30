(function () {
	'use strict';

	angular.module('app')
		.controller('MyController', [
			'myProvider',
			function (myProvider) {
				
				console.log('Inside MyController');
				var me = this;

				me.name = myProvider;
			}]);
}());

