angular.module('application', ['ngRoute'])
  .config(config);

function config($locationProvider, $routeProvider) {

  $locationProvider.html5Mode(true);
  
  $routeProvider
    .when('/login', {
      template: '<h1>Login Page</h1>'
    })
    .when('/widgets', {
      template: '<div>This is the Widgets page.</div>'
    })
    .when('/widgets/:id', {
      template: '<div>Page for a single Widget.</div>'
    })
    .otherwise({
      template: '<div>Nothing to see here.</div>'
    });
}