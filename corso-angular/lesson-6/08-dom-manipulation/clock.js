(function () {
	'use strict';

	angular.module('app')
		.directive('clock', ['$interval', 'dateFilter', function ($interval, dateFilter) {

			function link (scope, element, attrs) {

				var format, timeoutId;

				function updateTime() {
					element.text(dateFilter(new Date(), format));
				}

				scope.$watch(attrs.format, function(value) {
					format = value;
					updateTime();
				});

				element.on('$destroy', function() {
					$interval.cancel(timeoutId);
				});

				timeoutId = $interval(function() {
					updateTime();
				}, 1000);
			}

			return {
				link: link,
				replace: true,
				restrict: 'E',
				template: '<div></div>'
		  };

		}]);
}());
