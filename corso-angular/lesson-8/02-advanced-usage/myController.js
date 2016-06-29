(function () {
	'use strict';

	angular.module('app')
		.controller('MyController', [
			'$http',
			function ($http) {
				
				var me = this;

				me.selectedSeason = null;
				me.drivers = null;
				me.results = null;

				$http.get('http://ergast.com/api/f1/seasons.json?limit=1000')
					.then(function (response) {
						me.seasons = response.data.MRData.SeasonTable.Seasons;
					});


				me.resetLoadedData = function () {
					
					me.drivers = null;
					me.results = null;
				};


				me.loadDrivers = function () {
					
					if(!me.selectedSeason) {
						return;
					}

					me.resetLoadedData();

					$http.get('http://ergast.com/api/f1/' + me.selectedSeason + '/drivers.json?limit=1000')
						.then(function (response) {
							me.drivers = response.data.MRData.DriverTable.Drivers;
						});
				}


				me.loadResults = function () {
					
					if(!me.selectedSeason) {
						return;
					}

					me.resetLoadedData();

					$http.get('http://ergast.com/api/f1/' + me.selectedSeason + '/results.json?limit=1000')
						.then(function (response) {
							me.results = response.data.MRData.RaceTable.Races;
						});
				}
			}]);
}());

