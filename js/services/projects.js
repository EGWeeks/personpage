'use strict';

angular.module('projectsSrc', [])
	.service('projectsSrc', [projectsSrc]);

	function projectsSrc() {

		this.leftProjects = function() {
			return [
				{
					title: 'Pro Motocross API',
					body: 'Built following a RESTful design pattern Express.js is serving up the latest lap times from the Lucas oil pro motocross series. Storing all data in a MongoDB hosted on mLab for easy JSON returns.',
					tech: 'Node.js, Heroku, MongoDB, mLab',
					classes: 'arrow-right',
					url: 'http://promotocrossapi.com',
					githubURL: 'https://github.com/EGWeeks/promotocrossapi'
				},
				{
					title: 'BackWoods Contact',
					body: 'Outdoor enthusiast app that was built to showcase my ability of developing on all layers of the stack. ',
					tech: 'AngularJS, Google Maps API, PostgreSQL, Express.js',
					classes: 'arrow-right',
					url: 'https://backwoodscontact.xyz/',
					githubURL: 'https://github.com/EGWeeks/tutorFront'
				}
			];
		};

		this.rightProjects = function() {
			return [
				{
					title: 'PDF parser into DB',
					body: 'The parser was the first step of creating the motocross API because the organization that host the data only offers it in PDFs. Using NPM, ES6, and Promises it is downloading all the PDFs, parsing them to JSON format, and then pushing to my hosted MongoDB.',
					tech: 'ES6, Node.js, NPM',
					classes: 'arrow-left',
					url: 'https://github.com/EGWeeks/AMAPDFtoJSONParser',
					githubURL: 'https://github.com/EGWeeks/AMAPDFtoJSONParser'
				},
				{
					title: 'Weather Map',
					body: 'The parser was the first step of creating the motocross API because the organization that host the data only offers it in PDFs. Using NPM, ES6, and Promises it is downloading all the PDFs, parsing them to JSON format, and then pushing to my hosted MongoDB.',
					tech: 'jQuery, Foundation, Google Maps API, Wunderground API',
					classes: 'arrow-left',
					url: 'https://weathermap.firebaseapp.com',
					githubURL: 'https://github.com/EGWeeks/WeatherMap'
				}
			];
		};

	}