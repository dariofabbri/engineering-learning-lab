(function () {
	'use strict';

	angular.module('app')
		.controller('MyController', ['$log', function ($log) {

			$log.log('This is a log message.');
			$log.debug('Debug message');
			$log.info('Info message');
			$log.warn('Warn message');
			$log.error('Error message');

		}]);
}());
