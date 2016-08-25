'use strict';

angular.module('projectsSrc', [])
	.service('projectsSrc', [projectsSrc]);

	function projectsSrc() {

		this.leftProjects = function() {
			return [
				{
					title: 'Pro Motocross API',
					body: 'Built following a RESTful design pattern Express.js is serving up the latest lap times from the Lucas oil pro motocross series. Storing all data in a MongoDB hosted on mLab for easy JSON returns. The build inspiration came from watching the races every weekend and the announcers talking about how riders pace develop over the course of the race and I thought, "I need to graph that out". Come to find out there is no motocross API, so I filled the void.',
					tech: 'Node.js, Heroku, MongoDB, mLab',
					classes: 'arrow-right',
					url: 'http://promotocrossapi.com',
					githubURL: 'https://github.com/EGWeeks/promotocrossapi'
				},
				{
					title: 'Backwoods Contact',
					body: 'Backwoods is an outdoor sporting classifieds app that I built for my love of getting outside. Backwoods uses JSON Web Tokens for authorization, knex.js to query the Postgres database, express.js for routing, Angular for all the front end funcationality.',
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
					tech: 'jQuery, Google Maps, Wunderground',
					classes: 'arrow-left',
					url: 'https://weathermap.firebaseapp.com',
					githubURL: 'https://github.com/EGWeeks/WeatherMap'
				}
			];
		};

	}