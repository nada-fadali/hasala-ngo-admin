angular
  .module('hasalaNgo', ['ui.bootstrap', 'picardy.fontawesome', 'ngQuill', 'ui.router'])
  .config(['ngQuillConfigProvider', function (ngQuillConfigProvider) {
    ngQuillConfigProvider.set();
  }]);
