angular.module('GridDirective', []).directive('gridDirective', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
         console.log(element[0].offsetHeight);
      }
    }
});