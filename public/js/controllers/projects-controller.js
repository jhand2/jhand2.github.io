angular.module('ProjectsCtrl', []).controller('ProjectsCtrl', function($scope, ProjectService) {
    $scope.projects = [];

    ProjectService.getProjects(function (data) {
        $scope.projects = data;
        console.log(data);
    });

    $scope.init = function() {
        
    }

    $scope.newTab = function(url) {
        window.open(url, '_blank');
    }
});
