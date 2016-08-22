'use strict';

angular.module('homeCtrl', [])
	.controller('homeCtrl', ['$scope', '$interval', HomeCtrl]);

	function HomeCtrl($scope, $interval) {

	  var vm = this;

	  vm.title = "Hi, I'm Ethan";

	  // Blinking cursor
	  (function() {
	  	vm.show = true;
	  	$interval(function(){ 
		  	if(vm.show === true){
		  		vm.show = false;
		  	} else if (vm.show === false){
		  		vm.show = true;
		  	}
	  	}, 700, 4);
	  })();

	}