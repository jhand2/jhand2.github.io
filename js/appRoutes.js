angular.module('appRoutes', ['ui.router']).config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/',
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
        })
        .state('contact', {
            url: '/contact',
            templateUrl: './views/contact.html',
            controller:''
        });
});
