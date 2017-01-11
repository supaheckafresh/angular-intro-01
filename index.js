angular.module('application', ['ui.router'])
  .config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true).hashPrefix('!');

  $urlRouterProvider.otherwise('/nope');

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login.html'
    })
    .state('widgets', {
      url: '/widgets',
      templateUrl: 'widgets.html'
    })
    .state('widgets.widget', {
      url: '/:id',
      templateUrl: 'widgets.widget.html'
    })
    .state('otherwise', {
      url: '/nope',
      template: '<div>Nothing to see here.</div>'
    })
}