angular
  .module('hasalaNgo')
  .controller('ngoEditController', ['$stateParams', 'sendEditNgo', function ($stateParams, sendEditNgo) {
    var vm = this;
    vm.ngoData = $stateParams.ngo;

    this.deleteCategory = function (index) {
      vm.ngoData.categories.splice(index, 1);
    };
    this.addCategory = function () {
      vm.ngoData.categories.push('');
    };
  }])
  .factory('sendEditNgo', [function () {
    return this;
  }]);
