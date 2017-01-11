angular.module('application', ['ngRoute'])
  .config(config);

function config($locationProvider, $routeProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/login', {
      templateUrl: 'login.html'
    })
    .when('/widgets', {
      template: '<h1>Widgets</h1>'
    })
    .when('/widgets/:id', {
      templateUrl: '<h1>This is a single widget</h1>'
    })
    .otherwise({
      template: '<h1>Nothing to see here. Move along</h1>'
    })
}