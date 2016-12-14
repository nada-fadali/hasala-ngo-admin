angular
  .module('hasalaNgo')
  .controller('followupNewController', ['$stateParams', 'sendNewFollowup', function ($stateParams, sendNewFollowup) {
    this.hasala = $stateParams.hasala;
    this.followupData = {};
  }])
  .factory('sendNewFollowup', [function () {
    return this;
  }]);
