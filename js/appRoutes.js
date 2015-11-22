angular.module('appRoutes', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: './views/main.html',
			controller: 'MainCtrl'
		})
		.state('resume', {
			url: '/resume',
			templateUrl: './views/resume.html'
		})
		.state('projects', {
			url: '/projects',
			templateUrl: './views/projects.html',
			controller: 'ProjectsCtrl'
		});
});