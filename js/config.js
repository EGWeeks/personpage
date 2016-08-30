'use strict';

var portConfig = angular.module('portConfig',['ngRoute', 'angular-loading-bar']);

portConfig.config(['$routeProvider', '$locationProvider', 'cfpLoadingBarProvider', function($routeProvider, $locationProvider, cfpLoadingBarProvider) {

  cfpLoadingBarProvider.includeSpinner = true;
  cfpLoadingBarProvider.includeBar = true;

	$routeProvider

		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'homeCtrl',
			controllerAs: 'HC'
		})
		
		.when('/projects', {
			templateUrl: 'partials/projects.html',
			controller: 'projectsCtrl',
			controllerAs: 'PC'
		});
		
	$locationProvider.html5Mode(true);

}]);