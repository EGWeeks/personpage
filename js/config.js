'use strict';

var portConfig = angular.module('portConfig',['ngRoute', 'angular-loading-bar']);

portConfig.config(['$httpProvider', '$routeProvider', 'cfpLoadingBarProvider', function($httpProvider, $routeProvider, cfpLoadingBarProvider) {

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

}]);