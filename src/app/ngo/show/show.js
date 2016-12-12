angular
  .module('hasalaNgo')
  .controller('ngoShowController', ['$stateParams', 'getNgoDetails', function ($stateParams, getNgoDetails) {
    // this.show = getHasalaDetails.getHasala($stateParams.hasalaId);
    this.details = getNgoDetails;
  }])
  .factory('getNgoDetails', [function () {
    return "hello";
  }]);
