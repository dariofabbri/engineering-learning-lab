(function () {
	'use strict';

	angular.module('app')
		.controller('MyController', ['filterFilter', function (filterFilter) {

			var me = this;
			
			me.list = [
				{ id: 1, name: 'Rome', country: 'Italy' },
				{ id: 2, name: 'Paris', country: 'France' },
				{ id: 3, name: 'London', country: 'United Kingdom' },
				{ id: 4, name: 'Berlin', country: 'Germany' },
				{ id: 5, name: 'Madrid', country: 'Spain' }
			];

			me.updateFilter = function () {
				me.cities = filterFilter(me.list, me.clause);
			};

			me.updateFilter();
		}]);
}());
