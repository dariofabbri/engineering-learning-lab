(function () {
	'use strict';

	angular.module('app')
		.controller('ContactsListCtrl', [
			'$rootScope', 
			function ($rootScope) {

				var me = this;

				$rootScope.contacts = [
					{
						id: 1,
						name: 'Mario',
						surname: 'Rossi',
						email: 'mario.rossi@email.com',
						phone: '+39 345 6789012'
					},
					{
						id: 2,
						name: 'Luigi',
						surname: 'Bianchi',
						email: 'luigi.bianchi@email.com',
						phone: '+39 345 6789013'
					},
					{
						id: 3,
						name: 'Gina',
						surname: 'Verdi',
						email: 'gina.verdi@email.com',
						phone: '+39 345 6789014'
					},
					{
						id: 4,
						name: 'Antonia',
						surname: 'Neri',
						email: 'antonia.neri@email.com',
						phone: '+39 345 6789015'
					},
				];

				me.contacts = $rootScope.contacts;
		}]);
}());

