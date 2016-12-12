angular
  .module('hasalaNgo')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('hasalat', {
        url: '/hasalat',
        templateUrl: 'app/hasalat/index/index.html',
        controller: 'hasalatIndexController as hasalat'
      })
      .state('hasala', {
        url: '/hasalat/:hasalaId',
        templateUrl: 'app/hasalat/show/show.html',
        controller: 'hasalatShowController as hasala'
      })
      .state('ngoShow', {
        url: '/',
        templateUrl: 'app/ngo/show/show.html',
        controller: 'ngoShowController as ngo'
      });
  }]);
