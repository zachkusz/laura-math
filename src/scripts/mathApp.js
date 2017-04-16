var mathApp = angular.module('mathApp', ['ngRoute']);

mathApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/realLifeProblems.html',
      controller: "RealLifeProblemsController"
    })
   /*.otherwise({
      redirectTo: 'four04',
      templateUrl: '../views/four04.html',
      controller: "Four04Controller"
		})*/
}]);