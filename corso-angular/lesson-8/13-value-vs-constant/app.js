(function () {
	'use strict';

	angular.module('app', []);

	angular.module('app').value('myValue', 'Gino');
	angular.module('app').value('myValue', 'World');

	angular.module('app').constant('myConstant', 'Mars');
	angular.module('app').constant('myConstant', 'Jupiter');
}());
