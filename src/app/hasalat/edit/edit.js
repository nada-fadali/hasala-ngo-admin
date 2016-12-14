angular
  .module('hasalaNgo')
  .controller('hasalatEditController', ['$stateParams', 'sendEditHasala', function ($stateParams, sendEditHasala) {
    var vm = this;
    vm.hasala = $stateParams.hasala;
    vm.hasalaData = {
      name: vm.hasala.name,
      target: vm.hasala.target,
      description: vm.hasala.description,
      deadline: vm.hasala.deadline,
      nMilestones: vm.hasala.nMilestones,
      milestones: vm.hasala.milestones
    };
    // handle dates
    vm.getDate = function (date) {
      var tmp = new Date(date);
      return tmp.toDateString();
    };
    vm.getTime = function (date) {
      var tmp = new Date(date);
      return tmp.toLocaleTimeString();
    };
    this.datepickerOptions = {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };
    this.datepickerOpen = false;
    this.openDatepicker = function () {
      this.datepickerOpen = true;
    };
    vm.deadline = {
      date: new Date(vm.getDate(vm.hasala.deadline)),
      time: vm.hasala.deadline
    };
  }])
  .factory('sendEditHasala', [function () {
    // TODO
    // FIX DEADLINE before sending
    return this;
  }]);
