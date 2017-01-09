angular.module('ProjectService', []).service('ProjectService', ['$http', function($http) {
    var data = {};

    data.getProjects = function(callback) {
        $http({method:'GET', url: 'data/projects.json'})
        .success(function(res) {
            callback(res.results);
        });
    }

    data.addProject = function(projectData) {

    }

    data.removeProject = function(projectId) {

    }

    return data;
}]);
