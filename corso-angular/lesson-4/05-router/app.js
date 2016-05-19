(function () {
	'use strict';

	angular.module('app', ['ui.router'])
		.config([
			'$stateProvider', 
			'$urlRouterProvider', 
			function ($stateProvider, $urlRouterProvider) {

				// The default state is 'home'.
				//
				$urlRouterProvider.otherwise("/home");

				// Routes configuration.
				// 
				$stateProvider
					.state('home', {
						url: "/home",
						templateUrl: "home/home.html"
					})
					.state('contacts', {
						url: "/contacts",
						templateUrl: "contacts/list.html",
						controller: 'ContactsListCtrl as ctrl'
					})
					.state('contacts.detail', {
						url: "/{id:int}",
						templateUrl: "contacts/detail.html",
						controller: 'ContactDetailCtrl as ctrl'
					})
					.state('contacts.edit', {
						url: "/{id:int}/edit",
						templateUrl: "contacts/edit.html",
						controller: 'ContactDetailCtrl as ctrl'
					});

		}]);
}());
