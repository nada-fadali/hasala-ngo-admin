angular
  .module('hasalaNgo')
  .controller('ngoEditController', ['$stateParams', 'sendEditNgo', function ($stateParams, sendEditNgo) {
    this.ngoData = $stateParams.ngo;
  }])
  .factory('sendEditNgo', [function () {
    return this;
  }]);
