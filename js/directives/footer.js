'use strict';

angular.module('footDir', [])
	.directive('portFooter', [navbar]);

	function navbar() {
		return {
			templateUrl : '../partials/footer.html'
		};
	}