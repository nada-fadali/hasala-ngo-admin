angular
  .module('hasalaNgo', ['ui.bootstrap', 'picardy.fontawesome', 'ngQuill', 'angular.filter', 'ui.router'])
  .config(['ngQuillConfigProvider', function (ngQuillConfigProvider) {
    ngQuillConfigProvider.set();
  }]);
