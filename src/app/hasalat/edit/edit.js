angular
  .module('hasalaNgo')
  .controller('hasalatEditController', ['$stateParams', 'sendEditHasala', function ($stateParams, sendEditHasala) {
    this.hasalaData = $stateParams.hasala;
  }])
  .factory('sendEditHasala', [function () {
    return this;
  }]);
