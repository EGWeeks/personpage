'use strict';

angular.module('navDir', [])
	.directive('portNavbar', [navbar]);

	function navbar() {
		return {
			templateUrl : '../partials/navbar.html'
		};
	}