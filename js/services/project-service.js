angular.module('ProjectService', []).service('ProjectService', ['$http', function($http) {
	var data = {};
	var appId = 'vXlQJ1pQO9QfY11JhZhx5nrihIJAx7myRXSr6Had';
	var restKey = 'nJaTarpoUTLlZwVPnQmYa6lrKNGbUKnj8II63Pld';
	var baseUrl = 'https://api.parse.com/1';

	data.getProjects = function(callback) {
		var url = baseUrl + '/classes/Project';
		$http({method:'GET', url: url, headers: { 'X-Parse-Application-Id':appId, 'X-Parse-REST-API-Key':restKey}}).success(function(res) {
			callback(res.results);
		});
	}

	data.addProject = function(projectData) {

	}

	data.removeProject = function(projectId) {

	}

	return data;
}]);