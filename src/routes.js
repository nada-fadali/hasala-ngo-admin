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
      .state('hasalaEdit', {
        url: '/hasalat/:hasalaId/edit',
        templateUrl: 'app/hasalat/edit/edit.html',
        params: {hasala: null},
        controller: 'hasalatEditController as hasalaEditCtl'
      })
      .state('hasalaNew', {
        url: '/hasala/new',
        templateUrl: 'app/hasalat/new/new.html',
        controller: 'hasalatNewController as hasalaNewCtl'
      })
      .state('hasalaTerminate', {
        url: '/hasala/:hasalaId/terminate',
        templateUrl: 'app/hasalat/terminate/terminate.html',
        params: {hasalaName: null},
        controller: 'hasalatTerminateController as hasalaTerminateCtl'
      })
      .state('followupNew', {
        url: '/hasala/:hasalaId/update/new',
        templateUrl: 'app/followup/new/new.html',
        params: {hasala: null},
        controller: 'followupNewController as followupNewCtl'
      })
      .state('ngoShow', {
        url: '/',
        templateUrl: 'app/ngo/show/show.html',
        controller: 'ngoShowController as ngo'
      })
      .state('ngoEdit', {
        url: '/profile/edit',
        params: {ngo: null},
        templateUrl: 'app/ngo/edit/edit.html',
        controller: 'ngoEditController as ngoEditCtl'
      });
  }]);
