'use strict';

angular.module('projectsCtrl', [])
	.controller('projectsCtrl', ['projectsSrc', projectsCtrl]);

	function projectsCtrl(projectsSrc) {

	  var vm = this;

	  vm.rightProjects = projectsSrc.rightProjects();
	  vm.leftProjects = projectsSrc.leftProjects();

	}