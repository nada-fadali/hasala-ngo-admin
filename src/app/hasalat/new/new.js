angular
  .module('hasalaNgo')
  .controller('hasalatNewController', ['uibDateParser', 'sendNewHasala', function (uibDateParser, sendNewHasala) {
    this.hasalaData = {};
    this.categories = [
      'cateogry 1',
      'cateogry 2',
      'cateogry 3'
    ];
    // handle dates
    this.getDate = function (date) {
      var tmp = new Date(date);
      return tmp.toDateString();
    };
    this.getTime = function (date) {
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
  }])
  .factory('sendNewHasala', [function () {
    return this;
  }])
  .filter('range', function () {
    return function (input, total) {
      total = parseInt(total, 10);
      for (var i = 0; i < total; i++) {
        input.push(i);
      }

      return input;
    };
  });
