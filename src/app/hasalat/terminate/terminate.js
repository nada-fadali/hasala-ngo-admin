angular
  .module('hasalaNgo')
  .controller('hasalatTerminateController', ['$stateParams', 'terminateHasala', function ($stateParams, terminateHasala) {
    this.hasala = {
      name: $stateParams.hasalaName,
      id: $stateParams.hasalaId
    };
    // this.formData = {
    //   confirm: false,
    //   reason: ''
    // };
    // this.error = '';
    this.terminate = function (formData, hasala) {
      // if(!formData.confirm || formData.reason === ''){
      //   // show error
      //   this.error = 'You need to confirm';
      // }
      // else{
      //   // send request
      //   console.log('send request');
      // }
    };
  }])
  .factory('terminateHasala', ['$http', function ($http) {
    return this;
  }]);
