// just a dumbie service no AJAX here
// 
'use strict';

angular.module('projectsSrc', [])
	.service('projectsSrc', [projectsSrc]);

	function projectsSrc() {

		this.leftProjects = function() {
			return [
				{
					title: 'Pro Motocross API',
					body: 'Built following a RESTful design pattern, ExpressJS is serving up the latest lap times from the Lucas oil pro motocross series. All data is stored in a MongoDB hosted on mLab for quick JSON responses. The build inspiration came from watching the races every weekend and hearing the announcers talk about how riders\' pace develops over the course of the race. I thought, "I need to graph that out". Come to find out, there is no public motocross API. Here is the first one.',
					tech: 'Node.js, AWS EC2, MongoDB, mLab',
					url: 'http://promotocrossapi.com',
					githubURL: 'https://github.com/EGWeeks/promotocrossapi'
				},
				{
					title: 'Backwoods Contact',
					body: 'Backwoods is an outdoor enthusiast connection app that I built for my love of getting outside and working across the full stack. Backwoods uses JSON Web Tokens for authorization, Bcrypt to hashing passwords, KnexJS to query the PostgreSQL database, and ExpressJS for routing. AngularJS and Bootstrap are holding down the front end. Take a hack at it.',
					tech: 'AngularJS, Google Maps API, PostgreSQL, Express.js',
					url: 'https://backwoodscontact.xyz/',
					githubURL: 'https://github.com/EGWeeks/tutorFront'
				}
			];
		};

		this.rightProjects = function() {
			return [
				{
					title: 'PDF parser into DB',
					body: 'The parser was the first step of creating the motocross API because the organization that hosts the data only offers it in PDF form. Using NPM, ES6, and Promises, it is downloading all the PDFs, parsing them to JSON format, and then pushing to my hosted MongoDB. Check out the beauty of Promises on my github.',
					tech: 'ES6, Node.js, NPM',
					url: 'https://github.com/EGWeeks/AMAPDFtoJSONParser',
					githubURL: 'https://github.com/EGWeeks/AMAPDFtoJSONParser'
				},
				{
					title: 'Weather Map',
					body: 'Weather map uses the Wunderground API and the user\'s current location to return realtime weather data. I used ChartJS for hourly data visuals and Foundation\'s grid system to keep it organized. Since it is built on Google maps, the user has the ability to move the marker and get the coordinates weather information. Give it a try!',
					tech: 'jQuery, Foundation, ChartJS, Wunderground',
					url: 'https://weathermap.firebaseapp.com',
					githubURL: 'https://github.com/EGWeeks/WeatherMap'
				}
			];
		};

	}