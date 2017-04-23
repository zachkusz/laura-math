var mathApp = angular.module('mathApp', ['ngRoute']);

mathApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/realLifeProblems', {
      templateUrl: '/views/realLifeProblems.html',
      controller: "RealLifeProblemsController"
    })
    .when('/editor', {
      templateUrl: '/views/editor.html',
      controller: "EditorController"
    })
   .otherwise({
      redirectTo: '/realLifeProblems',
      templateUrl: '/views/realLifeProblems.html',
      controller: "RealLifeProblemsController"
		})
}]);