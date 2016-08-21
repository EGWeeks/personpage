'use strict';

angular.module('homeCtrl', [])
	.controller('homeCtrl', ['$scope', HomeCtrl]);

	function HomeCtrl($scope) {

	  var vm = this;

	  vm.getDate = getDate;

	  function getDate() {
	  	var current = new Date();

	  	return current;
	  }
	}